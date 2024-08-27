import { HttpException } from '@nestjs/common';

export class FormattedException extends HttpException {
  messageCode: string;
  constructor(message: string, statusCode: number, messageCode: string) {
    super(message, statusCode);
    this.messageCode = messageCode;
  }
}
