import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { timestamp } from "rxjs";
import { Document } from 'mongoose';

 

@Schema({
    timestamps:true
})
export class User extends Document{
    @Prop()
    cin:number;

    @Prop()
    fullname:string;

    @Prop()
    email:string;

    @Prop()
    adress:string;
     


}

export const UserSchema = SchemaFactory.createForClass(User)