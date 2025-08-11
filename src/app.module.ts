import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], //add aqui user
  controllers: [], //remove aqui
  providers: [], //remove aqui
})
export class AppModule {}
