import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
    @Prop()
    title: string;

    @Prop()
    person: string;

    @Prop()
    category: number;
    
    @Prop()
    message: string;
    
    @Prop()
    author: string;

    @Prop()
    imageURL: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);