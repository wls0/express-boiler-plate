import { BasicReqDto } from './dto/basic.req.dto';

export class BasicService {
  constructor() {}
  async test(body: BasicReqDto) {
    return {
      test: 'abc12',
    };
  }
}
