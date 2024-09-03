import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"




export class CreateUserDto{
    @IsNotEmpty()
    @IsNumber()
    readonly cin:number

    @IsNotEmpty()
    @IsString()
    readonly fullname:string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email:string

    @IsNotEmpty()
    @IsString()
    readonly adress:string
  
 
    
    
}
