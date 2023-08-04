import request from '@/plugins/umi-request';
import { MenuDataItem } from '@ant-design/pro-layout/es/typing';
import AntIcon from '@/components/AntIcon';
export async function login(params: API.ReqLoginForm) {
  const { data } = await request.post<API.Response<API.ResLogin>>(
    '/hooks/login',
    {
      data: params,
    },
  );
  return data;
}

export async function getMenuList() {
  const data = await request.get<API.Response<API.MenuListVO[]>>(
    '/hooks/menu/list',
  );
  return getFinalMenuList(data.data);
}

function getFinalMenuList(menuList: API.MenuListVO[]): MenuDataItem[] {
  return menuList.map((m) => ({
    name: m?.title,
    icon: <AntIcon name={m?.icon || ''} />,
    path: m?.path,
    children: getFinalMenuList(m?.children || []),
  }));
}

// * 获取按钮权限
export async function getAuthorButtons() {
  return await request.get<API.Response<API.ResAuthButtons>>(
    '/hooks/auth/buttons',
  );
}
