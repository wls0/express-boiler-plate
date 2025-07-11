import { Controller, Post, Body, Route, Response, SuccessResponse, Example, Tags } from 'tsoa';
import { basicValidate } from './vaildate/basic.vaildate';
import { BasicResDto } from './dto/basic.res.dto';
import { ICommonResponse } from '../common/dto/common.res.dto';
import typia from 'typia';
import { basicService } from './basic.singleton';
import { BasicReqDto } from './dto/basic.req.dto';
import { DefaultEmptyResponse } from '../common/decorator/response.decorator';

@Route('basic')
@Tags('basic')
@DefaultEmptyResponse
export class BasicController extends Controller {
  @Post('/test')
  @Example<ICommonResponse<any>>({
    success: true,
    code: 201,
  })
  @SuccessResponse('201', 'Basic successful')
  async test(@Body() reqBody: BasicReqDto) {
    const body = basicValidate(reqBody);

    const data = await basicService.test(body);

    const json = typia.json.assertStringify<BasicResDto>(data);
    /**
     * tsos에서 return 값이 없는 경우 swagger에 성공 예시값이 나타나지 않아
     * swagger 작성을 위해 null, 빈 문자열, undefined 값을 반환해야 하고
     * 그래서 @DefaultEmptyResponse 가 null, 빈 문자열, undefined를 return에서 제거 함
     * return undefined null '';
     */
    return typia.json.assertParse<BasicResDto>(json);
  }
}
