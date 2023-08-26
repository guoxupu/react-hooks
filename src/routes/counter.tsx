import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { decrement, increment, incrementByAmount } from '@/redux/reducer';
import { Button } from 'antd';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex w-[300px] justify-between">
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <span>{count}</span>
        <Button type="primary" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button type="primary" onClick={() => dispatch(incrementByAmount(2))}>
          DecrementByAmount
        </Button>
      </div>
    </div>
  );
}
