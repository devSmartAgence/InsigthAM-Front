const KeyNumber = ({ number, description }) => {
  return (
    <div className="text-center px-[30px] mb-[30px] ">
      <span className="font-sans text-deep-blue text-[30px]">{number}</span>
      <p className="font-serif">{description}</p>
    </div>
  );
};

KeyNumber.defaultProps = {};

export default KeyNumber;
