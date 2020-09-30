export interface GlobalRes<T = any> {
  code: number;
  data: T;
  msg?: string;
}
export enum PostUrlMap {
  'Register' = '/app/test/v1/register',
  'Login' = '/app/test/v1/login',
}
interface PostReqData {
  Register: RegisterReq;
  Login: LoginReq;
}
interface PostResData {
  Register: LoginRes;
  Login: LoginRes;
}
export interface PostGlobalReq<T extends PostUrlKeys> {
  url: PostUrlKeys;
  req: PostReqData[T];
  res: PostResData[T];
}

export type PostUrlKeys = keyof typeof PostUrlMap;

export enum GetUrlMap {}
interface GetReqData {}
interface GetResData {}
export interface GetGlobalReq<T extends GetUrlKeys> {
  url: GetUrlKeys;
  req: GetReqData[T];
  res: GetResData[T];
}

export type GetUrlKeys = keyof typeof GetUrlMap;
// 注册
export interface RegisterReq {
  area: string;
  account: string;
  pwd: string;
  re_pwd: string;
  code: number;
}
export interface LoginReq {
  area: string;
  account: string;
  pwd: string;
}
interface User {
  account: string;
  log_success: boolean;
  token: string;
  uid: number;
}
export interface LoginRes {
  user: User;
}
