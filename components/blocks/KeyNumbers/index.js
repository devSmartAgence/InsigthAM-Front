import delve from "dlv";
import KeyNumber from "./key-number";

const KeyNumbers = ({ keyNumber }) => {
  return (
    <div className="flex-row divide-y divide-gray md:flex md:divide-x md:divide-y-0 ">
      {keyNumber &&
        keyNumber.map((item, index) => (
          <KeyNumber
            key={index}
            number={delve(item, "Number")}
            description={delve(item, "Description")}
          />
        ))}
    </div>
  );
};

KeyNumbers.defaultProps = {};

export default KeyNumbers;
