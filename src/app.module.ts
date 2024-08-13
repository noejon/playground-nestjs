import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { DatabaseModule } from './database/database.module';
import { FootballPlayerModule } from './football-player/football-player.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';

@Module({
  imports: [
    PlayersModule,
    DatabaseModule,
    FootballPlayerModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 60_000,
        limit: 3,
      },
      {
        name: 'long',
        ttl: 1_000,
        limit: 3,
      },
    ]),
    CustomLoggerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule { }
