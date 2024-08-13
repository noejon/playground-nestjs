import { Module } from '@nestjs/common';
import { FootballPlayerService } from './football-player.service';
import { FootballPlayerController } from './football-player.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [FootballPlayerController],
  imports: [DatabaseModule],
  providers: [FootballPlayerService],
})
export class FootballPlayerModule { }
