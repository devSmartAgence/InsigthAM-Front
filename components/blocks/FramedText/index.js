const FramedText = ({ title, text }) => {
  return (
    <div className="bg-dark-beige px-12 py-10 mb-[7%] md:px-24 md:py-18">
      <p className="font-serif font-bold leading-[30px] mb-[10px]">{title}</p>
      <p className="font-serif leading-[30px]">{text}</p>
    </div>
  );
};

FramedText.defaultProps = {};

export default FramedText;
