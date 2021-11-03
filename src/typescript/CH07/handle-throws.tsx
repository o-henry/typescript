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

/**
 * custom error type
 * @throws { InvalidDateFormatError } 사용자가 생일을 잘못 입력함
 * @throws { DateIsInTheFutureError } 사용자가 생일을 미래 날짜로 입력함.
 *
 * consumer need to handle three situation.
 */
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function parse(
  birthday: string,
): Date | InvalidDateFormatError | DateIsInTheFutureError {
  let date = new Date(birthday);

  if (!isValid(date)) {
    return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD');
  }
  if (date.getTime() > Date.now()) {
    return new DateIsInTheFutureError('Are you a timelord?');
  }
  return date;
}

function HandleThrow() {
  React.useEffect(() => {
    let result = parse(ask() as string);
    if (result instanceof InvalidDateFormatError) {
      console.error(result.message);
    } else if (result instanceof DateIsInTheFutureError) {
      console.info(result.message);
    } else {
      console.info('Date is', result.toISOString());
    }
    // if (result instanceof Error) {
    //   console.error(result.message);
    // } else {
    //   console.info('Date is', result.toISOString());
    // }
  }, []);

  return <></>;
}

export { HandleThrow };
