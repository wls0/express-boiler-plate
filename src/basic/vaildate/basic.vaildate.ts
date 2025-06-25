import { BadRequestError } from '../../common/util/error';
import typia from 'typia';
import { BasicReqDto } from '../dto/basic.req.dto';

export const basicValidate = (req: BasicReqDto) => {
  const res: typia.IValidation<BasicReqDto> = typia.validate<BasicReqDto>(req);

  if (res.success) {
    return res.data;
  }

  throw new BadRequestError(res.errors);
};
