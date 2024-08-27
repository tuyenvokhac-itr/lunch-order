import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { FormattedException } from './formatted.exceptions';
import { APP_ERROR_CODE, APP_ERROR_MESSAGES } from '../constants/app_constants';

@Catch(HttpException, FormattedException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const res = exception.getResponse();
    let message = typeof res === 'string' ? res : (res as any).message;

    // default error code for undefined errors
    let messageCode: string;
    if (exception instanceof FormattedException)
      messageCode = exception.messageCode;
    else if ((res as any).messageCode) messageCode = (res as any).messageCode;
    else messageCode = APP_ERROR_CODE.SSO_ERROR_400_001;

    if (status === 401) {
      messageCode = APP_ERROR_CODE.SSO_ERROR_401_001;
      message = APP_ERROR_MESSAGES[APP_ERROR_CODE.SSO_ERROR_401_001];
    }

    response.status(status).json({
      statusCode: status,
      message: message,
      messageCode: messageCode,
    });
  }
}
