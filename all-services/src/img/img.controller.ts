import { Controller, Get, Param, Res } from '@nestjs/common';
import * as path from 'path';

@Controller('api/img')
export class ImgController {

    private currentPath: string = path.resolve(path.dirname(''));

    @Get('/getImage/name/:name')
    public getDistance(@Param('name') name: string, @Res() res: any): any {
        res.sendFile(path.join(this.currentPath, './images/', name));
    }
}
