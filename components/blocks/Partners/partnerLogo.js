import Image from "next/image";

const PartnerLogo = ({ logo }) => {
  const myLogo = logo.data.attributes.url;
  return (
    <div className="h-[40px] mr-[50px] ">
      <Image
        src={`http://localhost:1337/${myLogo}`}
        alt=""
        className="h-full w-full object-cover"
        layout="fill"
      />
    </div>
  );
};

PartnerLogo.defaultProps = {};

export default PartnerLogo;
