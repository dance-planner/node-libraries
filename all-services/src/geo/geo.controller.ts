import { Controller, Get, Param } from '@nestjs/common';
import { GeoService } from './geo.service';

@Controller('api/geo')
export class GeoController {

    public constructor(private geoService: GeoService) { }

    @Get('/getDistance/lat1/:lat1/lon1/:lon1/lat2/:lat2/lon2/:lon2')
    public getDistance(@Param('lat1') lat1: number, @Param('lon1') lon1: number,
                       @Param('lat2') lat2: number, @Param('lon2') lon2: number): number {
        return this.geoService.getDistance(lat1, lon1, lat2, lon2);
    }

}
