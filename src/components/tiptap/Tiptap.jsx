import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";

const Tiptap = ({ onChange, content }) => {
  const handleChange = (newContent) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class: "m-3 flex-grow-1",
        spellcheck: true,
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-2 border-secondary position-relative ">
      <EditorContent
        editor={editor}
        style={{
          whiteSpace: "pre-line",
          position: "relative",
        }}
      />
      <hr className="mb-0" />
      <Toolbar editor={editor} content={content} className="toolbar" />
    </div>
  );
};

export default Tiptap;
