/* Libs */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { faGlobe } from '@fortawesome/sharp-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/* Components */
import IconLink from '@/components/utility/IconLink/index';
import { IconFooter } from '@/components/utility/IconLink/index.styled';

/* Styles */
import {
  StyledArticle,
  StyledVideo,
} from '@/components/subpage/index.styled';
import { fadeContainer, fadeItem } from '@/components/utility/framer';

const AmbrosiaLab = () => {
  const { t } = useTranslation('projects');

  return (
    <motion.main
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.header variants={fadeItem}>
        <h1>
          <Link href='http://www.ambrosialab.it/' passhref='true'>
            AmbrosiaLab
          </Link>
        </h1>
      </motion.header>
      <StyledVideo
        variants={fadeItem}
        src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570265/April%20Tao/Projects/AmbrosiaLab/2022-05-14_16-16-35_skywsw.mp4'
        muted
        loop
        autoPlay
      />
      <StyledArticle
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.p variants={fadeItem}>{t('ambrosialab.paragraph.0')}</motion.p>
        <motion.p variants={fadeItem}>{t('ambrosialab.paragraph.1')}</motion.p>
        <motion.p variants={fadeItem}>{t('ambrosialab.paragraph.2')}</motion.p>
        <motion.p variants={fadeItem}>{t('ambrosialab.paragraph.3')} </motion.p>
      </StyledArticle>
      <IconFooter
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <IconLink
          href='http://www.ambrosialab.it/'
          icon={faGlobe}
          variants={fadeItem}
        />
        <IconLink
          href='https://github.com/apriltaoyvr/ambrosialab'
          icon={faGithub}
          variants={fadeItem}
        />
      </IconFooter>
    </motion.main>
  );
};

/* next-i18next */
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  };
}

export default AmbrosiaLab;
