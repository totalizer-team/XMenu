import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';

const borderGradient = (props) => {
  return {
    boxSizing: 'content-box',
    inset: 0,
    width: '100%',
    content: '""',
    height: '100%',
    margin: 'auto',
    position: 'absolute',
    borderRadius: 'inherit',
    left: props?.padding ? `-${props.padding}` : '-2px',
    padding: props?.padding ?? '2px',

    mask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)',
    WebkitMask:
      'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)',
    maskComposite: 'exclude',
    WebkitMaskComposite: 'xor',
    ...(props?.color && {
      // background: `linear-gradient(${props.color})`,
      background: 'none',
    }),
  };
};

const widthGradient = (value) => {
  if (typeof value === 'string') return value;
  else return `${value}px`;
};

export default function AnimateBorder({ animate = {}, sx = {}, children }) {
  const theme = useTheme();

  const {
    double = false,
    delay = 0,
    loop = true,
    angle = 315,
    length = 40,
    width: animateWidth = 2,
    color = theme.palette.primary.main,
    ease = 'linear',
    duration = 8,
    distance = 20,
    repeatType = 'loop',
    outline = 'divider',
    disabled = false,
  } = animate;

  const width = widthGradient(animateWidth);

  const rootRef = useRef(null);

  const animateRef = useRef(null);

  const [aspectRatio, setAspectRatio] = useState(1);

  const [animateStyle, setAnimateStyle] = useState(null);

  useEffect(() => {
    if (!disabled) {
      if (rootRef.current) {
        const { width, height } = rootRef.current.getBoundingClientRect();

        setAspectRatio(width / height);
      }

      if (double && animateRef.current) {
        const style = getComputedStyle(animateRef.current);

        setAnimateStyle({
          paddingLeft: style.paddingLeft,
          paddingRight: style.paddingRight,
          paddingBottom: style.paddingBottom,
          paddingTop: style.paddingTop,
          borderTopLeftRadius: style.borderTopLeftRadius,
          borderTopRightRadius: style.borderTopRightRadius,
          borderBottomLeftRadius: style.borderBottomLeftRadius,
          borderBottomRightRadius: style.borderBottomRightRadius,
        });
      }
    }
  }, [disabled, double]);

  const background = (color) => {
    const degs = [-55, 35, 125, 215, 305];

    const end = `transparent ${angle - (2 + length)}deg, ${color}  ${angle}deg, transparent ${angle + length}deg`;

    return [
      `conic-gradient(from ${degs[0]}deg at ${distance / aspectRatio}% ${distance}% , ${end})`,
      `conic-gradient(from ${degs[1]}deg at ${100 - distance / aspectRatio}% ${distance}% , ${end})`,
      `conic-gradient(from ${degs[2]}deg at ${100 - distance / aspectRatio}% ${100 - distance}% , ${end})`,
      `conic-gradient(from ${degs[3]}deg at ${distance / aspectRatio}% ${100 - distance}% , ${end})`,
      `conic-gradient(from ${degs[4]}deg at ${distance / aspectRatio}% ${distance}% , ${end})`,
    ];
  };

  const transition = {
    ease: ease,
    delay: delay,
    duration: duration,
    repeatType: repeatType,
    repeat: loop ? Infinity : 1,
    times:
      aspectRatio > 1
        ? [0, 0.25 + 0.25 / aspectRatio, 0.5, 0.75 + 0.25 / aspectRatio, 1]
        : [0, aspectRatio * 0.25, 0.5, 0.5 + aspectRatio * 0.25, 1],
  };

  return (
    <Box
      component="div"
      ref={rootRef}
      sx={{
        position: 'relative',
        borderRadius: 'inherit',
        '&::before': {
          ...borderGradient({ color: outline, padding: width }),
        },
        ...sx,
        border: animateWidth,
        borderColor: outline,
      }}
    >
      <Box
        ref={animateRef}
        component={motion.div}
        transition={transition}
        animate={
          !disabled
            ? {
                background: background(
                  typeof color === 'string' ? color : color[0],
                ),
              }
            : undefined
        }
        sx={{
          ...borderGradient({ padding: width }),
        }}
      />

      {!disabled && double && (
        <Box
          component={motion.div}
          transition={transition}
          animate={{
            background: background(
              typeof color === 'string' ? color : color[1],
            ),
          }}
          sx={{
            ...borderGradient({ padding: width }),
            transform: 'scale(-1)',
            ...(animateStyle && {
              paddingTop: animateStyle?.paddingBottom,
              paddingBottom: animateStyle?.paddingTop,
              paddingLeft: animateStyle?.paddingRight,
              paddingRight: animateStyle?.paddingLeft,
              borderTopLeftRadius: animateStyle?.borderBottomRightRadius,
              borderTopRightRadius: animateStyle?.borderBottomLeftRadius,
              borderBottomLeftRadius: animateStyle?.borderTopRightRadius,
              borderBottomRightRadius: animateStyle?.borderTopLeftRadius,
            }),
          }}
        />
      )}

      <Box
        sx={{
          position: 'relative',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
