import { useFullscreen } from 'ahooks';
import { useRef } from 'react';

const useFull = () => {
  const ref = useRef(null);
  const [, { enterFullscreen, exitFullscreen }] = useFullscreen(ref, {
    pageFullscreen: true,
  });

  return { ref, enterFullscreen, exitFullscreen };
};

export default useFull;
