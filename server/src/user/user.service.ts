import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
      ) {}
    
      async findAll(): Promise<User[]> {
        return await this.userModel.find();
      }

      async create(user: CreateUserDto): Promise<User> {
        return await this.userModel.create(user);
      }

      async findById(id: string): Promise<User> {
        const user = await this.userModel.findById(id);
        if (!user) {
          throw new NotFoundException('User Not Found');
        }
        return user;
      }

      async updateById(id: string, user: UpdateUserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user, {
          new: true,
          runValidators: true,
        });
      }


      async deleteById(id: string): Promise<User> {
        return await this.userModel.findByIdAndDelete(id);
    
    
      }



}
