import { useState } from "react";

const faqItem = ({ question, answer }) => {
  const [isBlockOpen, setIsBlockOpen] = useState(false);
  let handleOnClick = () => {
    setIsBlockOpen(!isBlockOpen);
  };
  return (
    <div className="flex mb-[30px]" onClick={handleOnClick}>
      <div
        className={`w-[10.66px] h-[8px] mt-[10px] cursor-pointer mr-[20px] ${
          isBlockOpen && "rotate-180"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.667"
          height="8"
          viewBox="0 0 10.667 8"
        >
          <path
            id="Picto_ouvrant"
            d="M4.5,1.248a1,1,0,0,1,1.664,0l3.465,5.2A1,1,0,0,1,8.8,8H1.869a1,1,0,0,1-.832-1.555Z"
            transform="translate(10.667 8) rotate(180)"
            fill="#243063"
          />
        </svg>
      </div>

      <div className="border-b border-solid border-gray overflow-hidden">
        <p
          className={`font-serif ${
            isBlockOpen && "font-bold"
          } leading-[30px] mb-[14px] cursor-pointer`}
        >
          {question}
        </p>
        <p
          className={`font-serif text-deep-blue leading-[30px] mb-[30px] ${
            !isBlockOpen && "hidden"
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

faqItem.defaultProps = {};

export default faqItem;
