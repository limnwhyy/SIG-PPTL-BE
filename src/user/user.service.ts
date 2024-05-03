import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      // check if username already exists
      const usernameExists = await this.prisma.user.findUnique({
        where: { username: createUserDto.username },
      });

      if (usernameExists) {
        throw new BadRequestException('Username already exists');
      }

      // check if email already exists
      const emailExists = await this.prisma.user.findUnique({
        where: { email: createUserDto.email },
      });

      if (emailExists) {
        throw new BadRequestException('Email already exists');
      }

      // create user
      const user = await this.prisma.user.create({
        data: createUserDto,
      });

      user.password = undefined;

      return user;
    } catch (error) {
      throw error;
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { username: loginUserDto.username },
      });

      if (!user) {
        throw new BadRequestException('Invalid credentials');
      }

      if (user.password !== loginUserDto.password) {
        throw new BadRequestException('Invalid credentials');
      }

      const payload = {
        sub: user.id,
        username: user.username,
      };

      const token = this.jwtService.sign(payload);

      await this.prisma.user.update({
        where: { id: user.id },
        data: { token },
      });

      return {
        access_token: token,
      };
    } catch (error) {
      throw error;
    }
  }
}
