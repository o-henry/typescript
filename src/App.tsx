import * as React from 'react';
import {
  ask,
  parse,
  InvalidDateFormatError,
  DateIsInTheFutureError,
} from './typescript';

export default function App() {
  React.useEffect(() => {
    try {
      let date = parse(ask() as string);
      if (date) {
        console.info('Date is', date.toISOString());
      }
    } catch (e) {
      // if (e instanceof RangeError) {
      //   console.error(e.message);
      // } else {
      //   throw e;
      // }
      if (e instanceof InvalidDateFormatError) {
        console.error(e.message);
      } else if (e instanceof DateIsInTheFutureError) {
        console.info(e.message);
      } else {
        throw e;
      }
    }
  }, []);

  return <div className="App"></div>;
}
