import {
  IsEmail,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export enum UserType {
  ADMIN = 'ADMIN',
  USER = 'USER',
  SHOP = 'SHOP',
}
export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(UserType)
  type: UserType;

  @IsEmpty({})
  phone: string;
}
