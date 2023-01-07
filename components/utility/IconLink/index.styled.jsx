import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const IconFooter = styled(motion.footer)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
`;

export const IconWrapper = styled(Link)`
  & svg {
    transition: color 0.5s ease-in-out;
    color: ${({ theme }) => theme.main.fg};

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.main.accentSecondary};
    }
  }
`;
