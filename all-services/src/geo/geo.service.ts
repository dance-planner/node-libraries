import { Injectable } from '@nestjs/common';
import { DistanceCalculator } from 'distance-calculator-lat-lon';

@Injectable()
export class GeoService {
    getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const dc: DistanceCalculator = new DistanceCalculator();

        const distance: number = dc.getDistance(lat1, lon1, lat2, lon2, 'K');

        return distance;
    }
}
