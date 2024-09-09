import { useFullscreen, useInterval } from 'ahooks';
import { useRef, useState } from 'react';

const useFull = () => {
  const ref = useRef(null);
  const [s, setS] = useState(0);
  const [, { enterFullscreen, exitFullscreen }] = useFullscreen(ref, {
    pageFullscreen: true,
  });

  useInterval(() => {
    if (s > 20 && document.querySelector('.ahooks-page-fullscreen')) return;

    setS((s) => s + 1);
    enterFullscreen();
  }, 500);

  return { ref, enterFullscreen, exitFullscreen };
};

export default useFull;
