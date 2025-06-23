import { Request } from 'express';
import { BadRequestError } from '../../../common/util/error';
import { IBasicDto } from '../basic.dto';
import typia from 'typia';

export const loginValidate = (req: Request) => {
  const body = req.body;
  const res: typia.IValidation<IBasicDto> = typia.validate<IBasicDto>(body);

  if (res.success) {
    return res.data;
  }

  throw new BadRequestError(res.errors);
};
