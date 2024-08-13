import { Test, TestingModule } from '@nestjs/testing';
import { FootballPlayerService } from './football-player.service';

describe('FootballPlayerService', () => {
  let service: FootballPlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FootballPlayerService],
    }).compile();

    service = module.get<FootballPlayerService>(FootballPlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
