import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasController } from './tareas/tareas.controller';
import { TareasService } from './tareas/tareas.service';
import { TareasModule } from './tareas/tareas.module';

@Module({
  imports: [TareasModule],
  controllers: [AppController, TareasController],
  providers: [AppService, TareasService],
})
export class AppModule {}
