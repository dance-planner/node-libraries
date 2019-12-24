import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoController } from './geo/geo.controller';
import { GeoService } from './geo/geo.service';
import { ImgController } from './img/img.controller';
import { FlagsController } from './flags/flags.controller';

@Module({
  imports: [],
  controllers: [AppController, GeoController, ImgController, FlagsController],
  providers: [AppService, GeoService],
})
export class AppModule {}
