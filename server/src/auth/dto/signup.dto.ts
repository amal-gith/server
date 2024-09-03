import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, minLength, MinLength } from "class-validator"




export class SignUpDto{
  

    @IsNotEmpty()
    @IsEmail({},{message:"Please enter correct email"})
    readonly email:string;



@IsNotEmpty()
@IsString()
@MinLength(8)
    readonly password : string


    
    
}
