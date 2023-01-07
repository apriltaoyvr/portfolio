import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledBackdrop = styled(motion.div)`

  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.nav.bg};
  width: 100vw;
  height: 100vh;
`;

export const StyledModal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  margin: auto;
  border: 1px solid ${({ theme }) => theme.main.accent};

  background: ${({ theme }) => theme.main.bg};
  padding: 1rem 1rem 2rem 1rem;
  width: clamp(25%, 500px, 90%);
  height: min-content;
`;

export const WindowBar = styled.hgroup`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const WindowIcon = styled(FontAwesomeIcon)`
  transition: color 0.2s ease-in-out;
  color: ${({ theme }) => theme.main.accent};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.main.accentSecondary};
  }
`;

export const StyledH3 = styled.h3`
  -webkit-text-stroke: 1.5px ${({ theme }) => theme.main.accent};
`;
