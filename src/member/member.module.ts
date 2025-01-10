import { Module } from '@nestjs/common';
import { MemberService } from './interface/member.service';
import { MemberResolver } from './interface/member.resolver';

@Module({
  providers: [MemberService, MemberResolver],
})
export class MemberModule {}
