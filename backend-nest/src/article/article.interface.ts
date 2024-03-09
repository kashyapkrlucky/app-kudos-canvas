import { Document } from 'mongoose';
export interface IArticle extends Document{
    readonly title: string;
    readonly person: string;
    readonly category: number;
    readonly message: string;
    readonly author: string;
    readonly imageURL: string;
}