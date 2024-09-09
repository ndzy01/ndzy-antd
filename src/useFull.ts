import { useFullscreen, useUnmount } from 'ahooks';
import { useRef } from 'react';

const useFull = () => {
  const ref = useRef(null);
  const [, { enterFullscreen, exitFullscreen }] = useFullscreen(ref, {
    pageFullscreen: true,
  });

  enterFullscreen();

  useUnmount(exitFullscreen);
  console.log('------ndzy------', ref, '------ndzy------');

  return { ref };
};

export default useFull;
