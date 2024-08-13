import { Injectable } from '@nestjs/common';
import { Position, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FootballPlayerService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createFootballPlayerDto: Prisma.FootbalPlayerCreateInput) {
    return this.databaseService.footbalPlayer.create({
      data: createFootballPlayerDto,
    });
  }

  async findAll(position: Position) {
    if (position) {
      return this.databaseService.footbalPlayer.findMany({
        where: { position },
      });
    }
    return this.databaseService.footbalPlayer.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.footbalPlayer.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateFootballPlayerDto: Prisma.FootbalPlayerUpdateInput,
  ) {
    return this.databaseService.footbalPlayer.update({
      where: { id },
      data: updateFootballPlayerDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.footbalPlayer.delete({ where: { id } });
  }
}
