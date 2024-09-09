import { useFullscreen, useUnmount, useUpdateEffect } from 'ahooks';
import { useStore } from 'ndzy-utils';
import { useRef } from 'react';

const useFull = () => {
  const store = useStore();
  const ref = useRef(null);
  const [, { enterFullscreen, exitFullscreen }] = useFullscreen(ref, {
    pageFullscreen: true,
  });

  useUpdateEffect(enterFullscreen, [store.loading]);

  useUnmount(exitFullscreen);

  return { ref };
};

export default useFull;
