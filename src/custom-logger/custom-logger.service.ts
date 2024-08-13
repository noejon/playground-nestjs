import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class CustomLoggerService extends ConsoleLogger {
  log(message: any, context?: string) {
    const entry = context + '\t' + message;

    super.log(entry);
  }
}
