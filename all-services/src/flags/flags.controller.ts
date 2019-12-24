import { Controller, Get, Param, Res } from '@nestjs/common';
import * as path from 'path';

@Controller('api/flags')
export class FlagsController {

    private currentPath: string = path.resolve(path.dirname(''));

    @Get('/getFlag/countryCode/:countryCode')
    public getDistance(@Param('countryCode') countryCode: string, @Res() res: any): any {
        res.sendFile(path.join(this.currentPath, './country-flags/', `${countryCode}.svg`));
    }

}
