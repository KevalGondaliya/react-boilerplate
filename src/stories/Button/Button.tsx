import { Button as AntdButton } from 'antd';
import { ButtonType } from 'antd/lib/button';
import { ReactNode } from 'react';

import styles from './index.module.scss';

export interface ButtonProps {
  label: String | ReactNode;
  type: ButtonType;
  loading?: boolean;
  icon?: any;
  onClick?: () => void;
  submit?: 'submit' | 'button' | 'reset' | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  loading = false,
  type = 'primary',
  submit = 'button',
  icon,
}) => {
  return (
    <AntdButton
      type={type}
      loading={loading}
      onClick={onClick}
      htmlType={submit}
      className={styles.button}
      icon={icon}
    >
      {label}
    </AntdButton>
  );
};
