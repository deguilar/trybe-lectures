import { useEffect } from 'react';

function useTimer(callback, intervalTime) {
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []);
}

export default useTimer;
