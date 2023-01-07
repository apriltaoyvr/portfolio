/* Libraries */
import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { faBars, faX } from '@fortawesome/sharp-solid-svg-icons';
/* Styles */
import {
  StyledIcon,
  ClosedNav,
  OpenNav,
  ContentWrapper,
  StyledHeader,
  StyledFooter,
  LangHolder,
} from './index.styled';

/* Components */
import LangMenu from './LangMenu';
import Links from './Links';
import ThemeMenu from './ThemeMenu';

const Navbar = ({ setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <MotionConfig reducedMotion='user'>
      <AnimatePresence initial={false}>
        {!isOpen ? (
          <ClosedNav
            initial={{ y: '-5%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-25%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 150 }}
            key='closed'
          >
            <motion.header whileTap={{ scale: 0.95 }} onClick={toggleNav}>
              <StyledIcon icon={faBars} size='xl' />
            </motion.header>
            <StyledFooter>
              <LangMenu />
              <ThemeMenu setTheme={setTheme} />
            </StyledFooter>
          </ClosedNav>
        ) : (
          <OpenNav
            initial={{ x: '-25%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-25%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 50 }}
            key='open'
          >
            <StyledHeader>
              <StyledIcon icon={faX} size='xl' onClick={toggleNav} />
              <ThemeMenu setTheme={setTheme} />
            </StyledHeader>
            <ContentWrapper>
              <Links closeNav={closeNav} />
              <LangHolder>
                <LangMenu />
              </LangHolder>
            </ContentWrapper>
          </OpenNav>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Navbar;
