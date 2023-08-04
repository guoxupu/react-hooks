import { PageContainer } from '@ant-design/pro-layout';

const Home = () => {
  return (
    <PageContainer title="欢迎使用Hooks Admin">
      <div className="flex justify-center items-center ">
        <img className="w-[70%]" src="/welcome01.png" alt="welcome" />
      </div>
    </PageContainer>
  );
};

export default Home;
