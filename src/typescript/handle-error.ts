function ask() {
  return prompt('When is your birthday?');
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  );
}

// custom error type
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

export { ask, parse, InvalidDateFormatError, DateIsInTheFutureError };
