import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKoordinatKampusDto } from './dto/create-koordinat-kampus.dto';
import { UpdateKoordinatKampusDto } from './dto/update-koordinat-kampus.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KoordinatKampusService {
  constructor(private prisma: PrismaService) {}

  async create(createKoordinatKampusDto: CreateKoordinatKampusDto) {
    try {
      const koordinatKampus = await this.prisma.perguruan_Tinggi.create({
        data: createKoordinatKampusDto,
      });
      return koordinatKampus;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.perguruan_Tinggi.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const result = await this.prisma.perguruan_Tinggi.findUnique({
      where: { id },
    });

    if (!result) {
      throw new NotFoundException(`Perguruan Tinggi with ID ${id} not found`);
    }

    return result;
  }

  async update(id: number, updateKoordinatKampusDto: UpdateKoordinatKampusDto) {
    try {
      const koordinatKampus = await this.prisma.perguruan_Tinggi.update({
        where: { id },
        data: updateKoordinatKampusDto,
      });
      return koordinatKampus;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const koordinatKampus = await this.prisma.perguruan_Tinggi.delete({
        where: { id },
      });
      return koordinatKampus;
    } catch (error) {
      throw error;
    }
  }
}
