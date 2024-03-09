import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './article.schema';

@Module({
  providers: [ArticleService],
  controllers: [ArticleController],
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
})
export class ArticleModule {}