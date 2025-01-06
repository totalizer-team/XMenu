import { useCallback, useEffect, useState } from 'react';

// ----------------------------------------------------------------------

function formatTime(value) {
  return String(value).length === 1 ? `0${value}` : `${value}`;
}

function calculateTimeDifference(futureDate, currentDate) {
  const distance = futureDate.getTime() - currentDate.getTime();

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

export default function useCountdownDate(targetDate, placeholder = '- -') {
  const [value, setValue] = useState({
    days: placeholder,
    hours: placeholder,
    minutes: placeholder,
    seconds: placeholder,
  });

  const handleUpdate = useCallback(() => {
    const now = new Date();
    const { days, hours, minutes, seconds } = calculateTimeDifference(
      targetDate,
      now,
    );

    setValue({
      days: formatTime(days),
      hours: formatTime(hours),
      minutes: formatTime(minutes),
      seconds: formatTime(seconds),
    });
  }, [targetDate]);

  useEffect(() => {
    handleUpdate();
    const interval = setInterval(handleUpdate, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}

// ----------------------------------------------------------------------

export function useCountdownSeconds(initialSeconds) {
  const [value, setValue] = useState(initialSeconds);

  const [isCounting, setIsCounting] = useState(false);

  const handleStart = useCallback(() => {
    setIsCounting(true);
  }, []);

  const handleReset = useCallback(() => {
    setIsCounting(false);
    setValue(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    let interval = null;

    if (isCounting && value > 0) {
      interval = setInterval(() => {
        setValue((prevValue) => prevValue - 1);
      }, 1000);
    } else if (value <= 0) {
      setIsCounting(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCounting, value]);

  return {
    value,
    setValue,
    isCounting,
    start: handleStart,
    reset: handleReset,
  };
}

/**
 * Usage
 * const countdown = useCountdownSeconds(10);
 * const { value, start, reset, isCounting } = useCountdownSeconds(30);
 */
