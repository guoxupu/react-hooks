import useAuth from '@/hooks/useAuth';
import { useRequest } from 'ahooks';
import { Button, DatePicker, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

export default function ProTable() {
  const { RangePicker } = DatePicker;

  const { getButtonAuths, token } = useAuth();
  const { data } = useRequest(getButtonAuths, {
    ready: !!token,
  });
  console.log(data?.useHooks);
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '刘彦祖',
      age: 18,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '刘彦祖',
      age: 18,
      address: '翻斗大街翻斗花园二号楼1001室',
    },
    {
      key: '5',
      name: '刘彦祖',
      age: 18,
      address: '翻斗大街翻斗花园二号楼1001室',
    },
  ];

  const columns: ColumnsType<{ name: string; age: number; address: string }> = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      align: 'center',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
      width: '50%',
    },
  ];
  return (
    <div className="card content-box">
      <div className="mb-[20px]">
        <span>切换国际化的时候看我 😎 ：</span>
        <RangePicker />
      </div>
      <div className="mb-[20px]">
        <Space>
          {data?.useHooks?.add && (
            <Button type="primary">我是 Admin && User 能看到的按钮</Button>
          )}
          {data?.useHooks.delete && (
            <Button type="primary">我是 Admin 能看到的按钮</Button>
          )}
          {data?.useHooks.edit && (
            <Button type="primary">我是 User 能看到的按钮</Button>
          )}
        </Space>
      </div>
      <Table bordered={true} dataSource={dataSource} columns={columns} />
    </div>
  );
}
