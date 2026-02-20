import { IsNumber, IsString, IsOptional, IsObject, IsNotEmpty } from 'class-validator';

export class CreateAttributeDto {
    @IsNumber()
    @IsNotEmpty()
    entityId: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsObject()
    @IsOptional()
    value?: Record<string, any>;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    modifiedBy?: string; // Если вы передаете имя пользователя с фронтенда
}
