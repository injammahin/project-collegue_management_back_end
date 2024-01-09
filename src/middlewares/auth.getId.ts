import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware is running...');
    console.log('====================================');
    console.log(req.headers.id);
    req.body.id = req.headers.id;
    console.log('====================================');
    next();
  }
}
