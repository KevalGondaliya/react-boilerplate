import { Col, Row } from 'antd';
import { ComponentType } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from './store';

export function withLayout<T>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    return (
      <Row justify="center">
        <Col span="16" style={{ margin: '3% 0' }}>
          <Component {...(hocProps as T)} />
        </Col>
      </Row>
    );
  };
}
