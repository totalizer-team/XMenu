'use client';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export default ({ titleComponent, children }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // React.useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };
  //   checkMobile();
  //   window.addEventListener('resize', checkMobile);
  //   return () => {
  //     window.removeEventListener('resize', checkMobile);
  //   };
  // }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <Box
      style={{
        height: '60rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // padding: isMobile ? '0.5rem' : '5rem',
        // ...(isMobile ? {} : { height: '80rem' }),
      }}
      ref={containerRef}
    >
      <div
        style={{
          // paddingTop: isMobile ? '2.5rem' : '10rem',
          // paddingBottom: isMobile ? '2.5rem' : '10rem',
          width: '100%',
          position: 'relative',
          perspective: '1000px',
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          isDark={isDark}
        >
          {children}
        </Card>
      </div>
    </Box>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        // maxWidth: '80rem',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ isDark, rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        // boxShadow:
        //   '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
        // maxWidth: '80rem',
        marginTop: '-3rem',
        margin: '0 auto',
        // height: isMobile ? '30rem' : '40rem',
        // width: '100%',
        // border: '4px solid #6C6C6C',
        // backgroundColor: '#222222',
        borderRadius: '30px',
        // boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          borderRadius: 2,
          backgroundColor: isDark ? '#18181b' : 'rgba(0,0,0,0)',
          // padding: isDark ? '0' : '1rem',
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
};
