import { FC } from 'react';
import styled from 'styled-components';
import { useText } from 'utils/lang';
import { PayMethodWithAll } from 'utils/payMethods';
import Chip from './Chip';
import ChipsWrapper from './ChipsWrapper';
import FilterLabel from './FilterLabel';

export interface PayMethodsProps {
  methods: PayMethodWithAll[];
  onChange: (method: PayMethodWithAll) => void;
  active: PayMethodWithAll;
}

export const PayMethods: FC<PayMethodsProps> = ({
  methods,
  onChange,
  active,
}) => {
  const t = useText()

  return (
    <PayMethodsWrapper>
      <FilterLabel>{t('filterPayVia')}</FilterLabel>
      {methods.filter((method) => method !== 'Western Union').map((method) => (
        <Chip key={method} isActive={method === active} onClick={() => onChange(method)}>
          {t(method)}
        </Chip>
      ))}
    </PayMethodsWrapper>
  )
};

export default PayMethods;

const PayMethodsWrapper = styled(ChipsWrapper)`
  padding-top: 0;
`;