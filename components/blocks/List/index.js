import delve from "dlv";
import ListItem from "./list-item";

const List = ({ listItem }) => {
  return (
    <ul className="ml-[90px] font-serif list-disc leading-[30px] mb-[30px]">
      {listItem &&
        listItem.map((item, index) => (
          <ListItem item={delve(item, "listItem")} />
        ))}
    </ul>
  );
};

List.defaultProps = {};

export default List;
