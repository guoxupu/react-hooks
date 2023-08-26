import {
  Link,
  useLocation,
  useNavigate,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';
// Hack 等待7.x版本修复
import { ProBreadcrumb, ProLayout } from '@ant-design/pro-layout';
import { getMenuList } from './domain/user/services';
import {
  Avatar,
  Dropdown,
  Menu,
  Modal,
  Space,
  Spin,
  Typography,
  message,
} from 'antd';
import AntIcon from './components/AntIcon';
import useAuth from './hooks/useAuth';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { USER } from './domain/user/constant';

export default function AppLayout() {
  const { loginPath } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // const { data } = useRequest(getAuthorButtons);
  const isLoginPage = loginPath === location.pathname;
  // if (!token && !isLoginPage) {
  //   return <PageLoading />;
  // }
  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: '温馨提示 🧡',
      icon: <ExclamationCircleOutlined />,
      content: '是否确认退出登录？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        localStorage.removeItem(USER);
        message.success('退出登录成功！');
        navigate('/login');
      },
    });
  };

  if (isLoginPage) {
    return <Outlet />;
  }

  return (
    <ProLayout
      title="Hooks Admin"
      logo="/logo.png"
      location={location}
      fixedHeader
      fixSiderbar
      // loading={loadingUserRoute || loadingSecret}
      menu={{
        request: getMenuList,
        autoClose: false,
      }}
      headerContentRender={() => {
        return <ProBreadcrumb />;
      }}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
      onMenuHeaderClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/');
      }}
      avatarProps={{
        title: 'hooks',
        render: () => (
          <Space>
            <NavRightContent
              // name={user?.fullName}
              onLogout={logout}
            />
          </Space>
        ),
      }}
    >
      <Outlet />
      <ScrollRestoration />
    </ProLayout>
  );
}

export interface NavRightContentProps {
  name?: React.ReactNode;
  avatar?: string;
  loading?: boolean;
  onLogout?: () => void | Promise<void>;
  onPassword?: () => void | Promise<void>;
}

export function NavRightContent(props: NavRightContentProps): JSX.Element {
  const { name, avatar, loading, onLogout } = props;

  const menu = (
    <Menu
      items={[
        // {
        //   key: '0',
        //   label: (
        //     <ModalFormUserPassword>
        //       <Space>
        //         <AntIcon name="EditOutlined" />
        //         <Typography.Text>修改密码</Typography.Text>
        //       </Space>
        //     </ModalFormUserPassword>
        //   ),
        //   onClick: onPassword,
        // },
        {
          key: '1',
          label: (
            <Space>
              <AntIcon name="LogoutOutlined" />
              <Typography.Text>退出登录</Typography.Text>
            </Space>
          ),
          onClick: onLogout,
        },
      ]}
    />
  );

  if (loading) {
    return (
      <Space className="px-[10px]">
        <Spin size="small" />
      </Space>
    );
  }

  return (
    <Dropdown overlay={menu}>
      <Space className="px-[10px]">
        <Avatar
          size="small"
          src={
            avatar ||
            'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
          }
          alt="avatar"
        />
        <Typography.Text>{name}</Typography.Text>
      </Space>
    </Dropdown>
  );
}
