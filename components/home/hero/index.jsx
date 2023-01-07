import { useTranslation } from 'next-i18next';

import MarqueeText from '../../utility/Marquee';
import { StyledMarquee } from '../../utility/Marquee/index.styled';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <StyledMarquee 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    style={{paddingTop: '4rem'}}>
      <MarqueeText speed={5} text={'April Tao'} />
      <MarqueeText speed={10} text={t('marquee.development')} />
      <MarqueeText speed={5} text={t('marquee.design')} />
      <MarqueeText speed={10} text={'April Tao'} />
      <MarqueeText speed={5} text={t('marquee.development')} />
      <MarqueeText speed={10} text={t('marquee.design')} />
    </StyledMarquee>
  );
};

export default Hero;
