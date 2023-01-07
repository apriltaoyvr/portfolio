import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledBackdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.nav.bg};
`;

const Backdrop = ({ children, onClick }) => {
  return (
    <StyledBackdrop
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;
