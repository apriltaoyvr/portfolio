import styled from 'styled-components';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

export const StyledMarquee = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const MarqueeLine = styled(Marquee)`
  user-select: none;
  overflow-y: hidden;
`;

export const TextWrapper = styled(motion.hgroup)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 0 0.5rem;
  text-transform: uppercase;

  @media screen and (min-width: 1920px) {
    gap: 2rem;
  }
`;

export const SolidText = styled(motion.h1)`
  overflow: hidden;
  text-shadow: none;
  color: ${({ theme }) => theme.main.accent};
`;

export const HollowText = styled(motion.h1)`
  overflow: hidden;
  text-shadow: none;
  color: transparent;
  -webkit-text-stroke: 1.5px ${({ theme }) => theme.main.accent};
`;
