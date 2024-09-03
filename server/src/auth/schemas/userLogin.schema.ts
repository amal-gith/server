import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps:true
})
export class Userlogin{
    @Prop({unique:[true, 'Duplicate email entered']})
    email:string

    @Prop()
    password:string
}


export const UserloginSchema= SchemaFactory.createForClass(Userlogin);