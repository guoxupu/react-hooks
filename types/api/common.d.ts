declare namespace API {
  export interface Response<T = null> {
    code: number;
    data: T;
    msg: string;
  }

  export interface Page<T = []> {
    total: number;
    current: number;
    pageSize: number;
    data: T;
    success: boolean;
  }

  export interface PageDTO {
    current?: number;
    pageSize?: number;
  }

  export interface Enum {
    label: React.ReactNode;
    value: number | string;
    disabled?: boolean;
  }

  export interface EnumDTO {
    filter?: boolean;
    transform?: boolean;
  }

  export interface File {
    url: string;
    thumbUrl: string;
    name: string;
    status: 'error' | 'success' | 'done' | 'uploading' | 'removed';
    response: { data: string };
  }
}
