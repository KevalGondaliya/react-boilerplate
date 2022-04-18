import { Link } from 'react-router-dom';
import { Form, Button, Typography } from 'antd';

import { Input } from '../../stories/Input/Input';

import styles from './index.module.scss';

export interface LoginFormProps {
  loading: boolean;
  onFinish: (values: any) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ loading, onFinish }) => {
  const { Text } = Typography;

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      requiredMark={false}
      className={styles.form}
      wrapperCol={{ span: 24 }}
    >
      <Input
        type="string"
        addonBefore="0"
        name="phoneNumber"
        placeholder="XX-XXXX-XXXX"
        rules={[{ required: true }]}
        label={'Phone Number'}
      />

      <Input
        type="password"
        name="password"
        label={'Password'}
        rules={[{ required: true }]}
      />
      <Form.Item className={styles.resetLink}>
        <Link to="/forgot-password">
          <Text underline>Reset Password</Text>
        </Link>
      </Form.Item>

      <Button
        block
        size="large"
        type="primary"
        htmlType="submit"
        loading={loading}
      >
        Login
      </Button>
    </Form>
  );
};
