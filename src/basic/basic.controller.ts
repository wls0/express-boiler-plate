import { Controller, Post, Body, Route, Response, SuccessResponse, Example, Tags } from 'tsoa';
import { basicValidate } from './vaildate/basic.vaildate';
import { BasicResDto } from './dto/basic.res.dto';
import { ICommonResponse } from '../common/dto/common.res.dto';
import typia from 'typia';
import { BasicService } from './basic.service';
import { BasicReqDto } from './dto/basic.req.dto';

const basicService = new BasicService();
@Route('basic')
@Tags('basic')
export class BasicController extends Controller {
  @Post('/test')
  @Example<ICommonResponse<BasicResDto>>({
    code: 201,
    success: true,
    data: { test: 'abc12' },
  })
  @SuccessResponse('201', 'Basic successful')
  async test(@Body() reqBody: BasicReqDto) {
    const body = basicValidate(reqBody);

    const data = await basicService.test(body);

    const json = typia.json.assertStringify<BasicResDto>(data);
    return typia.json.assertParse<BasicResDto>(json);
  }
}
