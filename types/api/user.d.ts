declare namespace API {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ResLogin {
    access_token: string;
  }
  export interface ResAuthButtons {
    useHooks: {
      add?: boolean;
      edit?: boolean;
      delete?: boolean;
    };
  }

  export interface MenuListVO {
    title: string;
    path: string;
    icon?: typeof Icons;
    children?: MenuListVO[];
  }
}
