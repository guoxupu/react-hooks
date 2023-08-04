import { memo, useCallback } from 'react';
import * as Icons from '@ant-design/icons';

export type AntIconMap = Omit<
  typeof Icons,
  | 'default'
  | 'createFromIconfontCN'
  | 'getTwoToneColor'
  | 'setTwoToneColor'
  | 'IconProvider'
>;

export type AntIconKey = keyof AntIconMap;

type AntIconProps = MergeParameters<AntIconMap['AccountBookFilled']>;

export interface IAntIconProps extends AntIconProps {
  name: AntIconKey;
}

export default memo(function AntIcon({ name, ...props }: IAntIconProps) {
  const Component = useCallback(Icons[name], [name]);
  return <Component {...props} />;
});
