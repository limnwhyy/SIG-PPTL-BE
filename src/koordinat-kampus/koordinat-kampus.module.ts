import { Module } from '@nestjs/common';
import { KoordinatKampusService } from './koordinat-kampus.service';
import { KoordinatKampusController } from './koordinat-kampus.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [KoordinatKampusController],
  providers: [KoordinatKampusService, PrismaService],
})
export class KoordinatKampusModule {}
