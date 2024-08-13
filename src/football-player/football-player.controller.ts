import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FootballPlayerService } from './football-player.service';
import { Prisma } from '@prisma/client';
import { Position } from 'src/types/Player';
import { SkipThrottle, Throttle } from '@nestjs/throttler';

@Controller('football-player')
export class FootballPlayerController {
  constructor(private readonly footballPlayerService: FootballPlayerService) { }

  @Post()
  create(@Body() createFootballPlayerDto: Prisma.FootbalPlayerCreateInput) {
    return this.footballPlayerService.create(createFootballPlayerDto);
  }

  @SkipThrottle({ default: false })
  @Get()
  findAll(@Query('position') position: Position) {
    return this.footballPlayerService.findAll(position);
  }

  @Throttle({ short: { ttl: 1_000, limit: 1 } })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.footballPlayerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFootballPlayerDto: Prisma.FootbalPlayerUpdateInput,
  ) {
    return this.footballPlayerService.update(+id, updateFootballPlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.footballPlayerService.remove(+id);
  }
}
