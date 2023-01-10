import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IfscModule } from './ifsc/ifsc.module';
import { DB, NODE_ENV } from 'config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    IfscModule,
    TypeOrmModule.forRoot({
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      type: 'postgres',
      synchronize: NODE_ENV === 'development',
      host: DB.host,
      database: DB.database,
      username: DB.username,
      password: DB.password,
      port: +DB.port,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
