import { useTranslation } from 'next-i18next';
import { motion, MotionConfig } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

/* Components */
import { WorkWrapper, ProjectWrapper, StyledProject } from './index.styled';
import {
  slideContainer,
  slideSubContainer,
  slideItem,
} from '../../utility/framer';

/* Images */
import ambrosia from '/public/static/images/projects/ambrosialab.webp';
import ripper from '/public/static/images/projects//theripper93.webp';
import levels from '/public/static/images/projects/levels101.webp';
import dracula from '/public/static/images/projects/dracula.webp';
import terrascape from '/public/static/images/projects/terrascape.webp';

const Projects = () => {
  const { t } = useTranslation('common');
  const css = { width: '100%', height: 'auto' };

  return (
    <MotionConfig reducedMotion='user'>
      <WorkWrapper id='projects'>
        <motion.hgroup
          variants={slideContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.h2 variants={slideItem}>
            <Link href={'#projects'}>{t('projects.title')}</Link>
          </motion.h2>
          <motion.h3 variants={slideItem}>{t('projects.subtitle')}</motion.h3>
        </motion.hgroup>
        <ProjectWrapper
          variants={slideSubContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <StyledProject
            href='/projects/ambrosialab'
            passHref
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className='item'
          >
            <Image
              src={ambrosia}
              alt={t('projects.alt[0]')}
              style={css}
              placeholder='blur'
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              quality={100}
            />
          </StyledProject>
          <StyledProject
            href='/projects/theripper93'
            passHref
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className='item'
            quality={100}
          >
            <Image
              src={ripper}
              alt={t('projects.alt[1]')}
              style={css}
              placeholder='blur'
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              quality={100}
            />
          </StyledProject>
          <StyledProject
            href='/projects/levels101'
            passHref
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className='item'
          >
            <Image
              title='Levels 101'
              src={levels}
              alt={t('projects.alt[2]')}
              style={css}
              placeholder='blur'
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              quality={100}
            />
          </StyledProject>
          <StyledProject
            href='/projects/draculafoundry'
            passHref
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className='item'
          >
            <Image
              title='Dracula Foundry'
              src={dracula}
              alt={t('projects.alt[3]')}
              style={css}
              placeholder='blur'
              className='item'
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              quality={100}
            />
          </StyledProject>
          <StyledProject
            href='/projects/terrascape'
            passHref
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className='item'
          >
            <Image
              title='Terrascape'
              src={terrascape}
              alt={t('projects.alt[4]')}
              style={css}
              placeholder='blur'
              className='item'
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              quality={100}
            />
          </StyledProject>
        </ProjectWrapper>
      </WorkWrapper>
    </MotionConfig>
  );
};

export default Projects;
