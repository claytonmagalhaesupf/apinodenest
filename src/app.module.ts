import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [UsersModule, ProfilesModule], //add aqui user
  controllers: [], //remove aqui
  providers: [], //remove aqui
})
export class AppModule {}
