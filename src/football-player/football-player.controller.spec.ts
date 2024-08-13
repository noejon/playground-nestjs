import { Test, TestingModule } from '@nestjs/testing';
import { FootballPlayerController } from './football-player.controller';
import { FootballPlayerService } from './football-player.service';

describe('FootballPlayerController', () => {
  let controller: FootballPlayerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FootballPlayerController],
      providers: [FootballPlayerService],
    }).compile();

    controller = module.get<FootballPlayerController>(FootballPlayerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
