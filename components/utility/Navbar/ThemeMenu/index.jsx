/* Libs */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { faPalette } from '@fortawesome/sharp-solid-svg-icons';

/* Components */
import Modal from '../../Modal/index';
import ThemeItem from './ThemeItem';
import { ThemeGrid } from './index.styled';
import { StyledIcon } from '../index.styled';

/* Themes */
import { dracula, pink, nordDark } from '../../../styles/Themes';

/* setTheme is drilled all the way from _app.jsx */
const ThemeMenu = ({ setTheme }) => {
  const { t } = useTranslation('common');

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };

  const open = () => {
    setModalOpen(true);
  };

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.95 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        <StyledIcon icon={faPalette} size='xl' />
      </motion.div>
      <Modal
        modalOpen={modalOpen}
        handleClose={close}
        title={t('utility.themes')}
        key='theme modal'
      >
        <ThemeGrid>
          <ThemeItem
            setTheme={setTheme}
            palette={dracula}
            background='hsl(234, 14%, 13%)'
            border='hsl(250, 100%, 75%)'
          />
          <ThemeItem
            background='hsl(221, 16%, 19%)'
            border='hsl(193, 43%, 67%)'
            setTheme={setTheme}
            palette={nordDark}
          />
          <ThemeItem
            background='hsl(240, 27%, 18%)'
            border='hsl(14, 50%, 75%)'
            setTheme={setTheme}
            palette={pink}
          />
        </ThemeGrid>
      </Modal>
    </>
  );
};

export default ThemeMenu;
