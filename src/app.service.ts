import { Injectable } from '@nestjs/common';
import { JwtService } from 'custom-nestjs-jwt';

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}
  getHello(): string {
    return 'Hello World!';
  }

  sign() {
    return this.jwtService.sign({
      user: {
        userId: 1,
        name: 'サンプル',
        account: 'sample',
      },
    });
  }

  verify(token: string) {
    const payload = this.jwtService.verify(token);

    return payload.user;
  }
}
