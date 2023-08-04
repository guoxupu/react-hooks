import LoginForm from '@/components/LoginForm';
import SwitchDark from '@/components/SwitchDark';
import '@/styles/login.less';
import clsx from 'clsx';
import { useState } from 'react';

const Login = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const onChange = (checked: boolean) => {
    setIsDark(checked);
  };
  return (
    <div className={clsx('login-container', isDark && 'bg-black')}>
      <SwitchDark onChange={onChange} isDark={isDark} />
      <div className="login-box">
        <div className="login-left">
          <img src="/login_left.png" alt="login" />
        </div>
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src="/logo.png" alt="logo" />
            <span className="logo-text">Hooks-Admin</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
