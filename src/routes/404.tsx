import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Result
      className="<sm:mt-0 mt-[100px]"
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在。"
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          返回首页
        </Button>
      }
    />
  );
}
