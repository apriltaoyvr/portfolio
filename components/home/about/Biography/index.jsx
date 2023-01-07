import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { slideContainer, slideItem } from '../../../utility/framer';
import {
  AboutWrapper,
  ParagraphWrapper,
  ImageWrapper,
  CaptionWrapper,
} from './index.styled';

import myself from '/public/static/images/me.webp';

const Biography = () => {
  const { t } = useTranslation('common');
  const css = { width: '100%', height: 'auto' };
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <MotionConfig reducedMotion='user'>
      <AnimatePresence>
        <motion.article
          variants={slideContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.h2 variants={slideItem}>
            <Link href={'#about'}>{t('about.title')}</Link>
          </motion.h2>
          <AboutWrapper variants={slideItem}>
            <ParagraphWrapper variants={slideItem}>
              {t('about.bio', { returnObjects: true }).map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </ParagraphWrapper>
            <ImageWrapper
              variants={slideItem}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {isHovering ? (
                <CaptionWrapper>
                  <Image
                    src={myself}
                    alt='A photo of myself in a cheongsam'
                    placeholder='blur'
                    style={css}
                    sizes='(max-width: 1200px) 50vw'
                    quality={100}
                  ></Image>
                  <motion.h6>{t('about.photoCredit')}</motion.h6>
                </CaptionWrapper>
              ) : (
                <CaptionWrapper>
                  <Image
                    src={myself}
                    alt='A photo of myself in a cheongsam'
                    placeholder='blur'
                    style={css}
                    sizes='(max-width: 1200px) 50vw'
                    quality={100}
                  ></Image>
                </CaptionWrapper>
              )}
            </ImageWrapper>
          </AboutWrapper>
        </motion.article>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Biography;
