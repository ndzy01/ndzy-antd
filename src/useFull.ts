import { useFullscreen, useInterval } from 'ahooks';
import { useRef } from 'react';

const useFull = () => {
  const ref = useRef(null);
  const [, { enterFullscreen, exitFullscreen }] = useFullscreen(ref, {
    pageFullscreen: true,
  });

  useInterval(() => {
    if (document.querySelector('.ahooks-page-fullscreen')) return;
    enterFullscreen();
  }, 100);

  return { ref, enterFullscreen, exitFullscreen };
};

export default useFull;
