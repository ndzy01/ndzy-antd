import { MdCatalog, MdPreview } from 'md-editor-rt';
import { v4 as uuidv4 } from 'uuid';
import 'md-editor-rt/lib/style.css';
import { useStore } from 'ndzy-utils';

const scrollElement = document.documentElement;
export const View = () => {
  const id = 'id_md_' + uuidv4();
  const store = useStore();

  return (
    <>
      <MdCatalog
        style={{
          position: 'fixed',
          right: 24,
          top: '11rem',
          zIndex: '9999',
        }}
        editorId={id}
        scrollElement={scrollElement}
      />
      <MdPreview editorId={id} modelValue={store.article?.content} />
    </>
  );
};
