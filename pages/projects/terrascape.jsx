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
import { StyledArticle, Contain } from '@/components/subpage/index.styled';
import { fadeContainer, fadeItem } from '@/components/utility/framer';

/* Image */
import screenshot from '/public/static/images/projects/terrascape.webp';

const Terrascape = () => {
  const { t } = useTranslation('projects');
  const css = { width: '75%', height: 'auto' };

  return (
    <motion.main
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.header variants={fadeItem}>
        <h1>
          <Link href='https://www.theripper93.com/terrascape' passhref='true'>
            Terrascape
          </Link>
        </h1>
      </motion.header>

      <motion.figure
        variants={fadeItem}
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          alt={t('terrascape.alt.0')}
          style={css}
          src={screenshot}
          width={1920}
          height={943}
        />
      </motion.figure>
      <StyledArticle
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.p variants={fadeItem}>{t('terrascape.paragraph.0')}</motion.p>
      </StyledArticle>
      <IconFooter
        variants={fadeContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <IconLink
          href='https://www.theripper93.com/terrascape'
          icon={faGlobe}
          variants={fadeItem}
        />
        <IconLink
          href='https://github.com/theripper93/terrascape'
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

export default Terrascape;
