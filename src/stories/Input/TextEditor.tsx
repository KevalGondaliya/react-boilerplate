import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import styles from './index.module.scss';

interface OnChangeHandler {
  (e: any): void;
}

type TextEditorProps = {
  value: string;
  placeholder: string;
  onChange: OnChangeHandler;
};

export const TextEditor: React.FC<TextEditorProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <ReactQuill
        theme="snow"
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.textEditorMain}
      />
    </>
  );
};
