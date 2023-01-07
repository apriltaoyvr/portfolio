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
  Gallery,
} from '@/components/subpage/index.styled';
import { fadeContainer, fadeItem } from '@/components/utility/framer';

const TheRipper93 = () => {
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
          <Link href='https://theripper93.com/' passHref>
            theripper93
          </Link>
        </h1>
      </motion.header>
      <StyledVideo
        src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570268/April%20Tao/Projects/theripper93/2022-05-14_16-15-31_bdlkkc.mp4'
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
        <motion.p variants={fadeItem}>{t('theripper93.paragraph.0')}</motion.p>
        <motion.p variants={fadeItem}>{t('theripper93.paragraph.1')}</motion.p>
        <Gallery variants={fadeItem}>
          <Image
            alt={t('theripper93.alt.0')}
            height='935'
            width='1140'
            style={css}
            src='https://user-images.githubusercontent.com/1346839/205125411-bc59bfde-8eca-4276-ab39-d796d860cf1b.png'
          />
          <Image
            alt={t('theripper93.alt.1')}
            height='935'
            width='1140'
            style={css}
            src='https://user-images.githubusercontent.com/1346839/205125453-14337bca-d07f-44cf-b07b-1e619e5e8aad.png'
          />
        </Gallery>
        <IconFooter
          variants={fadeContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <IconLink
            href='https://theripper93.com/'
            icon={faGlobe}
            variants={fadeItem}
          />
          <IconLink
            href='https://github.com/theripper93/theripper93.com'
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

export default TheRipper93;
