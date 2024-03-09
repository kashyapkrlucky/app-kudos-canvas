import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@learning.izq27nc.mongodb.net/?retryWrites=true&w=majority&appName=learning`,
      { dbName: process.env.DB_NAME }),
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
