import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Define your CORS options
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // or an array of allowed origins ['http://localhost:3000']
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, HTTP authentication) in the CORS request
  };

  // Enable CORS using the CorsMiddleware
  app.enableCors(corsOptions);

  await app.listen(3001);
}
bootstrap();
