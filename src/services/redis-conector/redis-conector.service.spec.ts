import { Test, TestingModule } from '@nestjs/testing';
import { RedisConectorService } from './redis-conector.service';

describe('RedisConectorService', () => {
  let service: RedisConectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisConectorService],
    }).compile();

    service = module.get<RedisConectorService>(RedisConectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
