import styled from 'styled-components';
import { CircleFlag } from 'react-circle-flags';
import { motion } from 'framer-motion';

export const LangWrapper = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

export const OptionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Flag = styled(CircleFlag)`
  align-self: center;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const Divider = styled(motion.hr)`
  border: none;
  border-left: 1px solid ${({ theme }) => theme.main.bgTertiary};
`;

export const StyledMenu = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
