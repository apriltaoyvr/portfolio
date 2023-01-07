/* Libs */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/* Components */
import IconLink from '@/components/utility/IconLink/index';
import { IconFooter } from '@/components/utility/IconLink/index.styled';

/* Styles */
import { StyledArticle, Gallery } from '@/components/subpage/index.styled';
import { fadeContainer, fadeItem } from '@/components/utility/framer';

const DraculaFoundry = () => {
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
          <Link href='https://github.com/apriltaoyvr/dracula-foundry' passHref>
            Dracula Foundry
          </Link>
        </h1>
      </motion.header>
      <StyledArticle
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.figure variants={fadeItem}>
          <Image
            alt={t('draculafoundry.alt.0')}
            width='2005'
            height='1035'
            style={css}
            src='https://user-images.githubusercontent.com/95392008/147394179-6777840b-3554-4e9c-b4c3-50cd99616ee2.png'
          />
        </motion.figure>
        <motion.p variants={fadeItem}>
          {t('draculafoundry.paragraph.0')}
        </motion.p>
        <motion.p variants={fadeItem}>
          {t('draculafoundry.paragraph.1')}
        </motion.p>
        <Gallery variants={fadeItem}>
          <Image
            alt={t('draculafoundry.paragraph.0')}
            height='973'
            width='1920'
            style={css}
            src='https://user-images.githubusercontent.com/95392008/147394076-a2fa6013-f8e8-4d28-9328-6f24df0a2763.png'
          />

          <Image
            alt={t('draculafoundry.alt.1')}
            height='973'
            width='1920'
            style={css}
            src='https://user-images.githubusercontent.com/95392008/147394182-0cb0a781-4d84-4b28-958e-0c2ed6526b4d.png'
          />
        </Gallery>
        <IconFooter
          variants={fadeContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <IconLink
            href='https://github.com/apriltaoyvr/dracula-foundry'
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

export default DraculaFoundry;
