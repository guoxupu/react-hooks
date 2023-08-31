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
    <div
      className={clsx('login-container', isDark ? 'bg-[#141414]' : 'bg-[#eee]')}
    >
      <SwitchDark onChange={onChange} isDark={isDark} />
      <div className={clsx('login-box', isDark ? 'bg-[#000c]' : 'bg-[#fffc]')}>
        <div className="login-left">
          <img src="/login_left.png" alt="login" />
        </div>
        <div
          className={clsx(
            'login-form',
            isDark ? '' : 'bg-transparent shadow-[2px_3px_7px_#0003]',
          )}
        >
          <div className="login-logo">
            <img className="login-icon" src="/logo.png" alt="logo" />
            <span
              className={clsx(
                'logo-text',
                isDark ? 'text-[#d9d9d9]' : 'text-[#475768]',
              )}
            >
              Hooks-Admin
            </span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
