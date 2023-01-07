import { useTranslation } from 'next-i18next';
import { Tabs, Tab, TabLink } from './index.styled';

const Links = ({ closeNav }) => {
  const { t } = useTranslation('common');

  return (
    <Tabs>
      <Tab
        onClick={closeNav}
        whileTap={{
          scale: 0.9,
        }}
      >
        <TabLink href={`/`}>{t('navigation.home')}</TabLink>
      </Tab>
      <Tab
        onClick={closeNav}
        whileTap={{
          scale: 0.9,
        }}
      >
        <TabLink href={`/#projects`}>
          {t('navigation.projects')}
        </TabLink>
      </Tab>
      <Tab
        onClick={closeNav}
        whileTap={{
          scale: 0.9,
        }}
      >
        <TabLink href={`/#about`}>
          {t('navigation.about')}
        </TabLink>
      </Tab>
      <Tab
        onClick={closeNav}
        whileTap={{
          scale: 0.9,
        }}
      >
        <TabLink href={`/#contact`}>
          {t('navigation.contact')}
        </TabLink>
      </Tab>
    </Tabs>
  );
};

export default Links;
