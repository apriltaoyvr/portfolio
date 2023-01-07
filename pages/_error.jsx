/* Libs */
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/sharp-solid-svg-icons';

/* next-i18next */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

/* Components */
import MarqueeText from '@/components/utility/Marquee/index';

/* Styles */
const StyledError = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

const Window = styled(motion.div)`
  position: absolute;
  z-index: 3;
  min-width: 50%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.nav.bg};
  backdrop-filter: blur(6px);
  padding: 2rem;
  margin: auto;
  border: 1px solid ${({ theme }) => theme.main.accent};
`;

const StyledButton = styled(motion.button)`
  background: transparent;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
  }
`;

const StyledArrow = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.main.accent};
  transition: color 0.66s cubic-bezier(0.39, 0.58, 0.57, 1);

  &:hover {
    filter: brightness(1.05);
  }
`;

export default function Error() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <StyledError>
      <Window>
        <h1>{t('utility.error')}</h1>
        <StyledButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <StyledArrow
            icon={faArrowLeftLong}
            size='5x'
            onClick={() => router.back()}
          />
        </StyledButton>
      </Window>
      <MarqueeText speed={10} text={t('utility.error')} />
      <MarqueeText speed={5} text={t('utility.error')} />
      <MarqueeText speed={10} text={t('utility.error')} />
      <MarqueeText speed={5} text={t('utility.error')} />
      <MarqueeText speed={10} text={t('utility.error')} />
      <MarqueeText speed={5} text={t('utility.error')} />
      <MarqueeText speed={10} text={t('utility.error')} />
      <MarqueeText speed={5} text={t('utility.error')} />
    </StyledError>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
