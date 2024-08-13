import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { Player, Position } from 'src/types/Player';
import { PlayersService } from './players.service';
import { ZodPipe } from 'src/zod/zod.pipe';
import {
  createPlayerSchema,
  createPositionSchema,
} from 'src/zod/schemas/player.zod';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) { }

  @Get()
  @UsePipes(new ZodPipe(createPositionSchema))
  findAll(@Query() { position }: { position?: Position }) {
    return this.playersService.findAll(position);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.findOne(id);
  }

  @Post()
  create(@Body(new ZodPipe(createPlayerSchema)) player: Omit<Player, 'id'>) {
    return this.playersService.create(player);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodPipe(createPlayerSchema)) updatedPlayer: Player,
  ) {
    return this.playersService.update(id, updatedPlayer);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.delete(id);
  }
}
