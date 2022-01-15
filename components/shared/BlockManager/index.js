import KeyNumbers from "../../blocks/KeyNumbers";
import TextImage from "../../blocks/TextImage";
import TitleH2 from "../../blocks/TitleH2";
import TitleH3 from "../../blocks/TitleH3";
import List from "../../blocks/List";

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case "blocks.key-numbers":
      Block = KeyNumbers;
      break;

    case "blocks.text-image":
      Block = TextImage;
      break;

    case "blocks.title-h2":
      Block = TitleH2;
      break;

    case "blocks.title-h3":
      Block = TitleH3;
      break;

    case "blocks.list":
      Block = List;
      break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : "No blocs";
};

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
