import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateKoordinatKampusDto } from './create-koordinat-kampus.dto';

export class UpdateKoordinatKampusDto extends PartialType(
  CreateKoordinatKampusDto,
) {
  @ApiProperty()
  X: number;
  @ApiProperty()
  Y: number;
  @ApiProperty()
  Name: string;
  @ApiProperty({
    required: false,
  })
  Tahun_Berdiri: number | null;
  @ApiProperty({
    required: false,
  })
  Jumlah_Prodi: number | null;
  @ApiProperty({
    required: false,
  })
  Kabupaten: string | null;
  @ApiProperty({
    required: false,
  })
  Deskripsi: string | null;
  @ApiProperty({
    required: false,
  })
  Alamat: string | null;
  @ApiProperty({
    required: false,
  })
  Image: string | null;
}
