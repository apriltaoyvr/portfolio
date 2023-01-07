import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* FA Icons */
export const StyledIcon = styled(FontAwesomeIcon)`
  transition: color 0.15s ease-in-out;
  color: ${({ theme }) => theme.main.fg};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.main.accent};
  }
`;

/* Unopened Nav*/
export const ClosedNav = styled(motion.nav)`

  display: flex;
  position: fixed;
  align-content: center;
  align-items: center;
  justify-content: space-between;

  transition: border-color 0.2s ease-in-out;
  z-index: 3;
  border-bottom: 1px solid ${({ theme }) => theme.main.bgTertiary};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  background: ${({ theme }) => theme.nav.bg};
  padding: 1rem;
  width: 100%;
  backdrop-filter: blur(4px);

  &:hover {
    border-color: ${({ theme }) => theme.main.accent};
  }
`;

/* Open Nav */
export const OpenNav = styled(motion.div)`

  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  transition: border-color 0.2s ease-in-out;
  z-index: 10;
  border-right: 1px solid ${({ theme }) => theme.main.bgTertiary};
  box-shadow: rgba(0, 0, 0, 0.24) 3px 0px 8px;

  background: ${({ theme }) => theme.nav.bg};
  padding: 1rem;
  height: 100%;
  backdrop-filter: blur(8px);

  &:hover {
    border-color: ${({ theme }) => theme.main.accent};
  }

  @media screen and (max-width: 768px) {
    border: none;
    width: 100vw;
  }
`;

/* Wrappers */
export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const StyledHeader = styled(motion.header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledFooter = styled(motion.footer)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const LangHolder = styled(motion.footer)`
  align-self: center;
`;
