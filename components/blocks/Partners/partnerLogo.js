const PartnerLogo = ({ logo }) => {
  const myLogo = logo.data.attributes.url;
  return (
    <div className="h-[40px] mr-[50px] ">
      <img
        src={`${DB_HOST}${myLogo}`}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
};

PartnerLogo.defaultProps = {};

export default PartnerLogo;
