import { readFile } from 'fs';

type Executor = {
  resolve: Function;
  reject: Function;
};

class Promise {
  constructor(f: Executor) {}
}


readFile(path, (error, result) = >)