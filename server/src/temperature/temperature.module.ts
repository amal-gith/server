import { Module } from '@nestjs/common';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';
//import { Tmp, TmpSchema } from './schema/tmp.schema';
import { Tmp, TmpSchema } from './schema/tmpdata';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tmp.name, schema: TmpSchema }])],
  controllers: [TemperatureController],
  providers: [TemperatureService],
})
export class TemperatureModule {}
