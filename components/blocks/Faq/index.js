import delve from "dlv";
import FaqItem from "./faq-item";

const faq = ({ FaqItem }) => {
  return (
    <ul className=" font-serif list-disc leading-[30px] mb-[5%] md:ml-13">
      {FaqItem &&
        FaqItem.map((item, index) => (
          <FaqItem
            key={index}
            question={delve(item, "question")}
            answer={delve(item, "answer")}
          />
        ))}
    </ul>
  );
};

faq.defaultProps = {};

export default faq;
