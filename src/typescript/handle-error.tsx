import * as React from 'react';

function ask() {
  return prompt('When is your birthday?');
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  );
}

/*
 * custom error type
 * @throws { InvalidDateFormatError } 사용자가 생일을 잘못 입력함
 * @throws { DateIsInTheFutureError } 사용자가 생일을 미래 날짜로 입력함.
 */
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function parse(birthday: string): Date | null {
  let date = new Date(birthday);

  if (!isValid(date)) {
    // null 대신 예외를 던져, 디버깅에 도움이 되는 메타데이터를 반환한다.
    // throw new RangeError('Enter a date in the form YYYY/MM/DD');
    throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD');
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError('Are you a timelord?');
  }
  return date;
}

function HandleError() {
  React.useEffect(() => {
    try {
      let date = parse(ask() as string);
      if (date) {
        console.info('Date is', date.toISOString());
      }
    } catch (e) {
      if (e instanceof InvalidDateFormatError) {
        console.error(e.message);
      } else if (e instanceof DateIsInTheFutureError) {
        console.info(e.message);
      } else {
        throw e;
      }
    }
  }, []);

  return <></>;
}

export { HandleError };
