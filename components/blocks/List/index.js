import delve from "dlv";
import ListItem from "./list-item";

const List = ({ listItem }) => {
  return (
    <ul className="md:ml-20 font-serif list-disc leading-[30px] mb-[30px] md:ml-20">
      {listItem &&
        listItem.map((item, index) => (
          <ListItem key={index} item={delve(item, "listItem")} />
        ))}
    </ul>
  );
};

List.defaultProps = {};

export default List;
