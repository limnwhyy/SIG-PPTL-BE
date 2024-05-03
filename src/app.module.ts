import { Module } from '@nestjs/common';
import { KoordinatKampusModule } from './koordinat-kampus/koordinat-kampus.module';
import { RouterModule } from '@nestjs/core';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: '/api/v1',
        children: [
          { path: '/koordinat-kampus', module: KoordinatKampusModule },
          { path: '/user', module: UserModule },
        ],
      },
    ]),
    KoordinatKampusModule,
    UserModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
