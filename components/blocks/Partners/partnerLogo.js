import Image from "next/image";

const PartnerLogo = ({ image }) => {
  let myImage;
  if (image) {
    myImage = image.data.attributes.url;
  } else {
    myImage =
      "https://res.cloudinary.com/smartagence/image/upload/v1645710269/iniight_placeholder_qne20w.png";
  }

  return (
    <div className="relative w-full h-[40px] mr-[50px] ">
      <Image src={myImage} alt="" objectFit="contain" layout="fill" />
    </div>
  );
};

PartnerLogo.defaultProps = {};

export default PartnerLogo;
