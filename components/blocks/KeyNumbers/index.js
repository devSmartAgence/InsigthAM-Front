import delve from "dlv";
import KeyNumber from "./key-number";

const KeyNumbers = ({ keyNumber }) => {
  return (
    <div className="flex divide-x divide-gray mb-[30px]">
      {keyNumber &&
        keyNumber.map((item, index) => (
          <KeyNumber
            number={delve(item, "Number")}
            description={delve(item, "Description")}
          />
        ))}
    </div>
  );
};

KeyNumbers.defaultProps = {};

export default KeyNumbers;
