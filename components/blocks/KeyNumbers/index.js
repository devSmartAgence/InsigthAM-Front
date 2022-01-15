import delve from "dlv";
import KeyNumber from "./key-number";

const KeyNumbers = ({ keyNumber }) => {
  console.log("keyNumber ===>", keyNumber);
  return (
    <section>
      <div>
        {keyNumber &&
          keyNumber.map((item, index) => (
            <KeyNumber
              number={delve(item, "Number")}
              description={delve(item, "Description")}
            />
          ))}
      </div>
    </section>
  );
};

KeyNumbers.defaultProps = {};

export default KeyNumbers;
