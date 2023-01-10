import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { IfscService } from './ifsc.service';
import { findIfscDto } from './dto/create-ifsc.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('ifsc')
@ApiTags('IFSC')
export class IfscController {
  constructor(private readonly ifscService: IfscService) {}

  @Get('bank')
  findBank() {
    return this.ifscService.findBank();
  }

  @Get()
  getBankState(@Query('bank') bank: string) {
    return this.ifscService.getBankState(bank);
  }

  @Get(':bank')
  findCity(@Param('bank') bank: string, @Query('state') state: string) {
    return this.ifscService.findCity(bank, state);
  }

  @Get(':bank/:state')
  findBranch(
    @Param('bank') bank: string,
    @Param('state') state: string,
    @Query('city') city: string,
  ) {
    return this.ifscService.findBranch(bank, state, city);
  }

  @Post()
  findIfsc(@Body() findIfscDto: findIfscDto) {
    return this.ifscService.findIfsc(findIfscDto);
  }
}
