import { ReactElement } from 'react';
import { Row, Divider, Typography, Card } from 'antd';

import styles from './index.module.scss';

const { Title } = Typography;

export interface CardBoxProps {
  title: string;
  className?: string;
  noCompanyName?: boolean;
  subtitle?: ReactElement;
}

export const CardBox: React.FC<CardBoxProps> = ({
  title,
  subtitle,
  children,
  className = '',
  noCompanyName = true,
}) => {
  return (
    <Row align="middle" justify="center" className={styles.cardBox}>
      {/* {noCompanyName && <div className={styles.companyName}>Demo</div>} */}
      <Card title={false} bordered={true} className={className + styles.card}>
        <Title level={3}>{title}</Title>
        <Divider className={styles.divider} />
        <div className={styles.subtitle}>{subtitle}</div>
        <Row>{children}</Row>
      </Card>
    </Row>
  );
};
