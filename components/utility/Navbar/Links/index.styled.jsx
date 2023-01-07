import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Tabs = styled(motion.ul)`
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  height: 100%;
  list-style: none;
`;

export const Tab = styled(motion.li)`
  position: relative;
  font-size: 24px;

  & a {
    color: ${({ theme }) => theme.main.fg};
    
    &:hover {
      color: ${({ theme }) => theme.main.accent};
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const TabLink = styled(Link)`
  text-decoration: none;
`;
