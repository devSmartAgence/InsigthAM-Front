const KeyNumberWide = ({ number, description }) => {
  return (
    <div className="flex items-center border-solid border-t border-gray mb-[30px] py-[25px]">
      <div className="w-[33%] font-sans text-deep-blue text-[30px] text-center leading-[30px]">
        {number}
      </div>
      <div className="w-2/3 font-serif leading-[30px]">{description}</div>
    </div>
  );
};

KeyNumberWide.defaultProps = {};

export default KeyNumberWide;
