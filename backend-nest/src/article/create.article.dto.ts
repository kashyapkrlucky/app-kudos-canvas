import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateArticleDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly person: string;

    @IsNumber()
    // @IsNotEmpty()
    readonly category: number;
    
    @IsString()
    @IsNotEmpty()
    readonly message: string;

    @IsString()
    @IsNotEmpty()
    readonly author: string;
    
    @IsString()
    @IsNotEmpty()
    readonly imageURL: string;
}