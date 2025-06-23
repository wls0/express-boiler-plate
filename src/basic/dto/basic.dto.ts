import { tags } from 'typia';

export interface IBasicDto {
  email: string & tags.Format<'email'>;
  password: string;
}
