import ReactMarkdown from "react-markdown";

const ListItem = ({ item }) => {
  return (
    <li className="mb-4">
      <ReactMarkdown>{item}</ReactMarkdown>
    </li>
  );
};

ListItem.defaultProps = {};

export default ListItem;
