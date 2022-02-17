import Image from "next/image";

const PartnerLogo = ({ logo }) => {
  let myLogo = logo.data.attributes.url;
  return (
    <div className="h-[40px] mr-[50px] ">
      <Image
        src={myLogo}
        alt=""
        className="h-full w-full object-cover"
        layout="fill"
      />
    </div>
  );
};

PartnerLogo.defaultProps = {};

export default PartnerLogo;
