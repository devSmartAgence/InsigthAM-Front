const TitleH2 = ({ title }) => {
  console.log("titleH2 ===>", TitleH2);

  return (
    <h2 className="font-sans text-[30px] text-deep-blue leading-[48px] place-content-start mb-[33px]">
      {title}
    </h2>
  );
};

TitleH2.defaultProps = {};

export default TitleH2;
