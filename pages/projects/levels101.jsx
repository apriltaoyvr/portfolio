/* Libs */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
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

const Levels101 = () => {
  const { t } = useTranslation('projects');
  const css = { width: '100%', height: 'auto' };

  return (
    <motion.main
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.header variants={fadeItem}>
        <h1>
          <Link href='https://github.com/apriltaoyvr/levels-101' passHref>
            Levels 101
          </Link>
        </h1>
      </motion.header>
      <StyledVideo
        src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1653795805/April%20Tao/Projects/levels101/2022-05-28_20-42-36_ujj6fe.mp4'
        muted
        loop
        autoPlay
        variants={fadeItem}
      />
      <StyledArticle
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.p variants={fadeItem}>{t('levels101.paragraph.0')}</motion.p>
        <motion.p variants={fadeItem}>{t('levels101.paragraph.1')}</motion.p>
        <motion.div variants={fadeItem}>
          <Image
            alt={t('levels101.alt.0')}
            height='973'
            width='1920'
            style={css}
            src='https://user-images.githubusercontent.com/95392008/147842084-f1860bc3-3db4-4908-ab0b-926dbd840b99.png'
          />
        </motion.div>
        <motion.div variants={fadeItem}>
          <Image
            alt={t('levels101.paragraph.1')}
            height='973'
            width='1920'
            style={css}
            src='https://user-images.githubusercontent.com/95392008/147842087-944ae2e6-5dd2-40f8-b6c8-8ea8e7aef1c1.png'
          />
        </motion.div>
        <IconFooter
          variants={fadeContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <IconLink
            href='https://levels-101.vercel.app/'
            icon={faGlobe}
            variants={fadeItem}
          />
          <IconLink
            href='https://github.com/apriltaoyvr/levels-101'
            icon={faGithub}
            variants={fadeItem}
          />
        </IconFooter>
      </StyledArticle>
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

export default Levels101;
