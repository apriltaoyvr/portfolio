/* Libraries */
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {
  faGithub,
  faBehance,
  faMastodon,
} from '@fortawesome/free-brands-svg-icons';

/* Framer */
import { motion } from 'framer-motion';
import { fadeContainer, fadeItem } from '../../utility/framer';

/* Components */
import IconLink from '../../utility/IconLink';
import { IconFooter } from '../../utility/IconLink/index.styled';

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <motion.main
      id='contact'
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
    >
      <motion.hgroup>
        <motion.h2 variants={fadeItem}>
          <Link href={'#contact'}>{t('contact.title')}</Link>
        </motion.h2>

        <motion.h3 variants={fadeItem}>{t('contact.subtitle')}</motion.h3>
      </motion.hgroup>
      <IconFooter>
        <IconLink
          href='https://github.com/apriltaoyvr'
          ariaLabel='A link to my Github'
          icon={faGithub}
        />
        <IconLink
          href='https://www.behance.net/apriltaoyvr'
          ariaLabel='A link to my Behance'
          icon={faBehance}
        />
        <IconLink
          href='https://mastouille.fr/@casanova'
          ariaLabel='A link to my Mastodon'
          rel={'me'}
          icon={faMastodon}
        />
      </IconFooter>
    </motion.main>
  );
};

export default Contact;
