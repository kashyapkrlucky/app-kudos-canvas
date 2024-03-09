import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './create.article.dto';

@Controller('article')
export class ArticleController {

    private readonly service: ArticleService


    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto) {
        return await this.service.create(createArticleDto);
    }
}
