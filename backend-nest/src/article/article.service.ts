import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './article.schema';
import { CreateArticleDto } from './create.article.dto';

@Injectable()
export class ArticleService {
    constructor(@InjectModel(Article.name) private model: Model<ArticleDocument>) { }

    async findAll(): Promise<Article[]> {
        return await this.model.find().exec();
    }

    async create(createArticleDto: CreateArticleDto): Promise<Article> {
        return await new this.model({
            ...createArticleDto,
        }).save();
    }

}
