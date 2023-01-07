import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { langContainer, langChild } from '../../framer';

import {
  LangWrapper,
  StyledMenu,
  OptionWrapper,
  Divider,
  Flag,
} from './index.styled';

const countryCodes = {
  en: 'us',
  it: 'it',
  fr: 'fr',
};

const LangMenu = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <LangWrapper>
      <MotionConfig reducedMotion='user'>
        <AnimatePresence>
          {isOpen ? (
            <StyledMenu>
              <OptionWrapper
                variants={langContainer}
                initial='hidden'
                animate='visible'
                exit='hidden'
                key='lang-container'
              >
                {/* Scale for multiple languages */}
                {Object.entries(countryCodes)
                  .filter(([key]) => key !== router.locale)
                  .map(([key, value]) => (
                    <motion.div
                      variants={langChild}
                      key={key}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href=''
                        scroll={false}
                        locale={key}
                        key={key}
                        passHref
                      >
                        <Flag
                          countryCode={value}
                          height='25'
                          onClick={closeMenu}
                        />
                      </Link>
                    </motion.div>
                  ))}
              </OptionWrapper>
              <Divider
                key='divider'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              />
            </StyledMenu>
          ) : (
            ''
          )}
        </AnimatePresence>
      </MotionConfig>
      <OptionWrapper whileTap={{ scale: 0.95 }}>
        <Flag
          countryCode={`${countryCodes[router.locale]}`}
          height='25'
          onClick={toggleMenu}
          delay={`0s`}
        />
      </OptionWrapper>
    </LangWrapper>
  );
};

export default LangMenu;
