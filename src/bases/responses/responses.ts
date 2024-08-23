import {
  APP_ERROR_MESSAGES,
  APP_MESSAGES,
} from 'src/libs/constants/app_constants';

export interface IResponse {
  statusCode: number;
  message: string;
  messageCode: string;
}

export class NormalResponse implements IResponse {
  constructor(statusCode: number, messageCode: string, data?: any) {
    this.statusCode = statusCode;
    this.message = APP_MESSAGES[messageCode];
    this.messageCode = messageCode;
    this.data = data;
  }
  statusCode: number;
  message: string;
  messageCode: string;
  data?: any;
}

export class ErrorResponse implements IResponse {
  constructor(statusCode: number, messageCode: string) {
    this.statusCode = statusCode;
    this.message = APP_ERROR_MESSAGES[messageCode];
    this.messageCode = messageCode;
  }
  statusCode: number;
  message: string;
  messageCode: string;
}
