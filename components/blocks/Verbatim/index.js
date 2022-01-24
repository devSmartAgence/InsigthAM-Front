const Verbatim = ({ quote, author }) => {
  return (
    <div className="flex mt-[20px] mb-[5%] md:ml-13">
      <span className="font-sans text-deep-blue text-[30px] text-right mt-[-9px] ">
        «
      </span>
      <div className="ml-[14px]">
        <p className="font-serif text-deep-blue text-[20px] leading-[30px] mb-[6px]">
          {quote}
        </p>
        <span className="font-serif text-deep-blue text-[16px]">{author}</span>
      </div>
    </div>
  );
};

Verbatim.defaultProps = {};

export default Verbatim;
