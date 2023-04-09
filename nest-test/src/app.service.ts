import { Injectable } from '@nestjs/common';

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello, ' + this.greeting;
  }
}

@Injectable()
export class AppService {
  constructor(private readonly testService: Greeter) {}
  getHello(): string {
    return this.testService.greet();
  }
}
