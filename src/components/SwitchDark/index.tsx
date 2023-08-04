import { Switch } from 'antd';

export interface SwitchDarkProps {
  onChange: (isDark: boolean) => void;
  isDark: boolean;
}
export default function SwitchDark({ onChange, isDark }: SwitchDarkProps) {
  return (
    <Switch
      className="dark"
      defaultChecked={isDark}
      checkedChildren={<>🌞</>}
      unCheckedChildren={<>🌜</>}
      onChange={onChange}
    />
  );
}
