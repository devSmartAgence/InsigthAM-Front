const KeyNumberWide = ({ number, description }) => {
  return (
    <div className="flex-row border-solid border-t border-gray mb-[5%] py-[25px] md:flex md:items-center">
      <div className="w-full mb-2 font-sans text-deep-blue text-[30px] text-center leading-[30px] md:w-1/3 md:mb-0">
        {number}
      </div>
      <div className="w-full text-center font-serif leading-[30px] md:w-2/3 md:text-justify">
        {description}
      </div>
    </div>
  );
};

KeyNumberWide.defaultProps = {};

export default KeyNumberWide;
