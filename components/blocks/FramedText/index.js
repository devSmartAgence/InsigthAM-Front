const FramedText = ({ title, text }) => {
  return (
    <div className="bg-dark-beige px-[5.625rem] py-[3.125rem] mb-[60px]">
      <p className="font-serif font-bold leading-[30px] mb-[10px]">{title}</p>
      <p className="font-serif leading-[30px]">{text}</p>
    </div>
  );
};

FramedText.defaultProps = {};

export default FramedText;
