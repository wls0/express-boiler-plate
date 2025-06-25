export interface ICommonResponse<T> {
  /**
   * 응답 코드
   * @example 200
   */
  code: number;
  /**
   * 응답 성공 여부
   * @example true
   */
  success: boolean;
  /**
   * 응답 데이터
   */
  data: T;
}
