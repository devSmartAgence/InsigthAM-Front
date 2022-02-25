import ReactMarkdown from "react-markdown";

const Text = ({ text }) => {
  return (
    <div className="font-serif leading-7 mb-[5%]">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

Text.defaultProps = {};

export default Text;
