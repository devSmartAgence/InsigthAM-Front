const KeyNumber = ({ number, description }) => {
  return (
    <div className="text-center px-[30px] mb-10 flex-1 pt-8 first:pt-0 md:first:pt-10">
      <span className="font-sans text-deep-blue text-[30px]">{number}</span>
      <p className="font-serif">{description}</p>
    </div>
  );
};

KeyNumber.defaultProps = {};

export default KeyNumber;
