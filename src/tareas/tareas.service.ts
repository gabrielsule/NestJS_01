import { Injectable } from '@nestjs/common';
import { Tarea } from './interfaces/tarea';

@Injectable()
export class TareasService {
    tarea: Tarea[] = [
        {
            id: 1,
            titulo: 'abc 123',
            descripion: 'Officia enim duis ut aute in mollit et mollit quis nisi quis mollit commodo.',
            terminada: false,
        },
        {
            id: 2,
            titulo: 'abc 456',
            descripion: 'Officia enim duis ut aute in mollit et mollit quis nisi quis mollit commodo.',
            terminada: true,
        },
    ];

    getTareas(): Tarea[] {
        return this.tarea;
    }

    getTarea(id): Tarea {
        return this.tarea.find(tarea => tarea.id === id);
    }
}
