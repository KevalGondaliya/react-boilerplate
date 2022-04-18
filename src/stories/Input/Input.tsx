import { ReactNode } from 'react';
import { Rule } from 'antd/lib/form';
import { SearchOutlined } from '@ant-design/icons';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { Form, Select, Input as AntdInput, DatePicker } from 'antd';

import { TextEditor } from './TextEditor';

import styles from './index.module.scss';

export interface InputProps {
  rows?: number;
  type?: string;
  rules?: Rule[];
  disabled?: boolean;
  maxLength?: number;
  showCount?: boolean;
  addonBefore?: string;
  placeholder?: string;
  name: string | string[];
  label?: string | ReactNode;
  onSearch?: (Text: string) => void;
  options?: { [key: string]: string };
  min?: number;
}

const { Option } = Select;

export const Input: React.FC<InputProps> = ({
  name,
  label,
  onSearch,
  rows = 2,
  maxLength,
  rules = [],
  options = {},
  type = 'input',
  showCount = false,
  placeholder = '',
  disabled = false,
  addonBefore = undefined,
  min,
}: InputProps) => {
  const props = {
    disabled,
    addonBefore: addonBefore,
    size: 'large' as SizeType,
    placeholder: placeholder,
  };

  switch (type) {
    case 'search':
      return (
        <Form.Item name={name} rules={rules} label={label}>
          <div className={styles.searchInput}>
            <AntdInput.Search
              size="large"
              onSearch={onSearch}
              prefix={<SearchOutlined />}
            />
          </div>
        </Form.Item>
      );
    case 'textarea':
      const { addonBefore, ...textProps } = props;
      return (
        <Form.Item
          name={name}
          rules={rules}
          label={label}
          className={styles.inputBox}
        >
          <AntdInput.TextArea
            {...textProps}
            rows={rows}
            showCount={showCount}
            maxLength={maxLength}
          />
        </Form.Item>
      );
    case 'date':
      return (
        <Form.Item
          name={name}
          rules={rules}
          label={label}
          className={styles.inputBox}
        >
          <DatePicker {...props} />
        </Form.Item>
      );
    case 'select':
      return (
        <Form.Item
          name={name}
          rules={rules}
          label={label}
          className={styles.inputBox}
        >
          <Select allowClear size="large">
            {Object.keys(options).map((key: string) => (
              <Option value={options[key]} key={key}>
                {key}
              </Option>
            ))}
          </Select>
        </Form.Item>
      );
    case 'editor':
      return (
        <Form.Item name={name} rules={rules}>
          {/* @ts-ignore */}
          <TextEditor />
        </Form.Item>
      );
    case 'hidden':
      return (
        <div className={styles.hiddenBox}>
          <Form.Item name={name} rules={rules}>
            <AntdInput type="string" />
          </Form.Item>
        </div>
      );
    default:
      return (
        <Form.Item
          name={name}
          rules={rules}
          label={label}
          className={styles.inputBox}
        >
          <AntdInput type={type} {...props} min={min} />
        </Form.Item>
      );
  }
};
