import { useFullscreen, useUnmount } from 'ahooks';
import { useRef } from 'react';

const useFull = () => {
  const ref = useRef(null);
  const [, { enterFullscreen, exitFullscreen }] = useFullscreen(ref, {
    pageFullscreen: true,
  });

  if (ref.current) {
    console.log(111);
    enterFullscreen();
  }

  useUnmount(exitFullscreen);

  return { ref };
};

export default useFull;
