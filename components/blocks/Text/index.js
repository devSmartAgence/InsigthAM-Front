import ReactMarkdown from "react-markdown";

const Text = ({ text }) => {
  return (
    <p className="font-serif leading-7 mb-[5%]">
      <ReactMarkdown>{text}</ReactMarkdown>
    </p>
  );
};

Text.defaultProps = {};

export default Text;
