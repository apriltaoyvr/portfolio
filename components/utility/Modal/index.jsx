import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { faX } from '@fortawesome/sharp-solid-svg-icons';

import { StyledModal, WindowBar, WindowIcon, StyledH3 } from './index.styled';
import Backdrop from './Backdrop';

/* ModalOpen and handlers are passed in from the parent component */
const Modal = ({ modalOpen, handleClose, title, children }) => {
  return (
    <MotionConfig>
      <AnimatePresence>
        {modalOpen && (
          <Backdrop onClick={handleClose}>
            <StyledModal
              initial={{ y: '-75%', opacity: 0 }}
              animate={{ y: '0', opacity: 1 }}
              exit={{ y: '75%', opacity: 0 }}
              transition={{ type: 'spring', bounciness: 0, duration: 0.66 }}
              onClick={(e) => e.stopPropagation()}
            >
              <WindowBar>
                <motion.div whileTap={{ scale: 0.95 }} onClick={handleClose}>
                  <WindowIcon icon={faX} size='xl' />
                </motion.div>
                <StyledH3>{title}</StyledH3>
                {/* Special whitespace for flexbox */}
                <p style={{ userSelect: 'none' }}>⠀⠀</p>
              </WindowBar>
              {children}
            </StyledModal>
          </Backdrop>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Modal;
