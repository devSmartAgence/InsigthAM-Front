import ReactMarkdown from "react-markdown";

const ListItem = ({ item }) => {
  return (
    <li>
      <ReactMarkdown>{item}</ReactMarkdown>
    </li>
  );
};

ListItem.defaultProps = {};

export default ListItem;
