import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PostTareasDto } from './dto/post-tareas-dto';
import { PutTareasDto } from './dto/put-tareas-dto';
import { TareasService } from './tareas.service';
import { Tarea } from './interfaces/tarea';

@Controller('tareas')
export class TareasController {

    constructor(private service: TareasService) {}

    @Get()
    getTareas(): Tarea[] {
        return this.service.getTareas();
    }

    @Get('id')
    getTarea(@Param('id') id): Tarea {
        return this.service.getTarea(id);
    }

    @Post()
    postTareas(@Body() data: PostTareasDto): string {
        console.log(data);
        return 'post tarea 01';
    }

    @Put(':id')
    putTareas(@Body() data: PutTareasDto, @Param('id') id): string {
        console.log(id);
        console.log(data);
        return 'put tarea 01';
    }

    @Delete(':id')
    deleteTareas(@Param('id') id ): string {
        console.log(id);
        return 'delete tarea 01';
    }
}
