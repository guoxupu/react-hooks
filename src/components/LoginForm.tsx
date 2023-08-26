import md5 from 'js-md5';
import { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  LockOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { HOME_URL } from '@/config/config';
import useAuth from '@/hooks/useAuth';
const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  // 登录
  const onFinish = async (loginForm: API.ReqLoginForm) => {
    try {
      setLoading(true);
      loginForm.password = md5(loginForm.password);
      const data = await login(loginForm);
      if (data) {
        message.success('登录成功！');
        navigate(HOME_URL);
      }
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password
          autoComplete="new-password"
          placeholder="密码：123456"
          prefix={<LockOutlined />}
        />
      </Form.Item>
      <Form.Item className="login-btn">
        <Button
          onClick={() => {
            form.resetFields();
          }}
          icon={<CloseCircleOutlined />}
        >
          {'login.reset'}
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          icon={<UserOutlined />}
        >
          {'login.confirm'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
