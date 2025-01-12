'use client';
import Box from '@mui/material/Box';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export default ({
  firstImage = '',
  secondImage = '',
  mode = 'hover',
  autoplay = true,
  duration = 5000,
  initialSliderPercentage = 50,
  sx = {},
  ...other
}) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);

  const [isMouseOver, setIsMouseOver] = useState(false);

  const autoplayRef = useRef(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = (elapsedTime % (duration * 2)) / duration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16); // ~60fps
    };

    animate();
  }, [autoplay, duration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  function mouseEnterHandler() {
    setIsMouseOver(true);
    stopAutoplay();
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    if (mode === 'hover') {
      setSliderXPercent(initialSliderPercentage);
    }
    if (mode === 'drag') {
      setIsDragging(false);
    }
    startAutoplay();
  }

  const handleStart = useCallback(
    (clientX) => {
      if (mode === 'drag') {
        setIsDragging(true);
      }
    },
    [mode],
  );

  const handleEnd = useCallback(() => {
    if (mode === 'drag') {
      setIsDragging(false);
    }
  }, [mode]);

  const handleMove = useCallback(
    (clientX) => {
      if (!sliderRef.current) return;
      if (mode === 'hover' || (mode === 'drag' && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [mode, isDragging],
  );

  const handleMouseDown = useCallback(
    (e) => handleStart(e.clientX),
    [handleStart],
  );
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback(
    (e) => handleMove(e.clientX),
    [handleMove],
  );

  const handleTouchStart = useCallback(
    (e) => {
      if (!autoplay) {
        handleStart(e.touches[0].clientX);
      }
    },
    [handleStart, autoplay],
  );

  const handleTouchEnd = useCallback(() => {
    if (!autoplay) {
      handleEnd();
    }
  }, [handleEnd, autoplay]);

  const handleTouchMove = useCallback(
    (e) => {
      if (!autoplay) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove, autoplay],
  );

  return (
    <Box
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      sx={{
        width: 400,
        height: 300,
        overflow: 'hidden',
        position: 'relative',
        cursor: mode === 'drag' ? 'grab' : 'col-resize',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <AnimatePresence initial={false}>
          {firstImage ? (
            <Box
              component={motion.div}
              sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: 20,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              <img
                alt="first image"
                src={firstImage}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  userSelect: 'none',
                }}
                draggable={false}
              />
            </Box>
          ) : null}
        </AnimatePresence>
      </Box>
      <AnimatePresence initial={false}>
        {secondImage ? (
          <Box
            component={motion.img}
            // motion.img
            alt="second image"
            src={secondImage}
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              zIndex: 19,
              width: '100%',
              userSelect: 'none',
            }}
            draggable={false}
          />
        ) : null}
      </AnimatePresence>
    </Box>
  );
};
