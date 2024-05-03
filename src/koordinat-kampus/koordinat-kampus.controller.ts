import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KoordinatKampusService } from './koordinat-kampus.service';
import { CreateKoordinatKampusDto } from './dto/create-koordinat-kampus.dto';
import { UpdateKoordinatKampusDto } from './dto/update-koordinat-kampus.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Koordinat Kampus')
@Controller()
export class KoordinatKampusController {
  constructor(
    private readonly koordinatKampusService: KoordinatKampusService,
  ) {}

  @Post()
  create(@Body() createKoordinatKampusDto: CreateKoordinatKampusDto) {
    return this.koordinatKampusService.create(createKoordinatKampusDto);
  }

  @Get()
  findAll() {
    return this.koordinatKampusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.koordinatKampusService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKoordinatKampusDto: UpdateKoordinatKampusDto,
  ) {
    return this.koordinatKampusService.update(+id, updateKoordinatKampusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.koordinatKampusService.remove(+id);
  }
}
