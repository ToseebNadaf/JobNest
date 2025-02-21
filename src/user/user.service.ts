import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { RegisterUserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    const {
      fullname,
      email,
      phoneNumber,
      password,
      profileBio,
      profileSkills,
      profileResume,
      profileResumeOriginalName,
      profilePhoto,
      role,
    } = registerUserDto;

    if (!fullname || !email || !phoneNumber || !password) {
      throw new BadRequestException('All fields are required');
    }
    console.log(registerUserDto, 'registerUserDto');

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists with this email');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword, 'hashedPassword');

    const user = await this.prisma.user.create({
      data: {
        fullname,
        email,
        phoneNumber,
        password: hashedPassword,
        profileBio,
        profileSkills,
        profileResume,
        profileResumeOriginalName,
        profilePhoto,
        role,
      },
    });

    if (!user) {
      throw new BadRequestException('User not created');
    }

    return { user, success: true, message: 'User Created Successfully' };
  }
}
