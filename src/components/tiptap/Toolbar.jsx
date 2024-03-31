import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Heading3,
  // Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center p-2">
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        className={`toolbarBtn ${
          editor.isActive("bold") ? "bg-mid text-light" : "bg-transparent"
        }`}
      >
        <Bold className="toolbarIcon" />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        className={`toolbarBtn ${
          editor.isActive("italic") ? "bg-mid text-light" : "bg-transparent"
        }`}
      >
        <Italic className="toolbarIcon" />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run();
        }}
        className={`toolbarBtn ${
          editor.isActive("underline") ? "bg-mid text-light" : "bg-transparent"
        }`}
      >
        <Underline className="toolbarIcon" />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        className={`toolbarBtn ${
          editor.isActive("heading") ? "bg-mid text-light" : "bg-transparent"
        }`}
      >
        <Heading3 className="toolbarIcon" />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        className={`toolbarBtn ${
          editor.isActive("bulletList") ? "bg-mid text-light" : "bg-transparent"
        }`}
      >
        <List className="toolbarIcon" />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        className={`toolbarBtn ${
          editor.isActive("orderedList")
            ? "bg-mid text-light"
            : "bg-transparent"
        }`}
      >
        <ListOrdered className="toolbarIcon" />
      </button>

      {/* <button
        onClick={(e) => { e.preventDefault()
          editor.chain().focus().toggleBlockquote().run();
        }}
        className={`toolbarBtn ${
          editor.isActive("blockquote") ? "bg-mid text-light" : "bg-transparent"
        }`}
      >
        <Quote className="toolbarIcon" />
      </button> */}

      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleCode().run();
        }}
        className={`toolbarBtn ${
          editor.isActive("code") ? "bg-mid text-light" : "bg-transparent"
        }`}
      >
        <Code className="toolbarIcon" />
      </button>

      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={`toolbarBtn ${
          editor.isActive("undo") ? "bg-mid text-light" : "bg-transparent"
        }`}
      >
        <Undo className="toolbarIcon" />
      </button>

      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={`toolbarBtn ${
          editor.isActive("redo") ? "bg-mid text-light" : "bg-transparent"
        }`}
      >
        <Redo className="toolbarIcon" />
      </button>
    </div>
  );
};

export default Toolbar;
