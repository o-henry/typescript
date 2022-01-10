class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

/**
 * custom error type
 * @throws { InvalidDateFormatError } 사용자가 생일을 잘못 입력함
 * @throws { DateIsInTheFutureError } 사용자가 생일을 미래 날짜로 입력함.
 *
 * 사용자는 성공과 에러 상황을 모두 처리해야 한다.
 */
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

let result = parse(ask());
if (result instanceof InvalidDateFormatError) {
  console.error(result.message);
} else if (result instanceof DateIsInTheFutureError) {
  console.info(result.message);
} else {
  console.info('Date is', result.toISOString());
}
