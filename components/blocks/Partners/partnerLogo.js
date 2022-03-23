import Image from "next/image";

const PartnerLogo = ({ image, link }) => {
  let myImage;
  if (image) {
    myImage = image.data.attributes.url;
  } else {
    myImage =
      "https://res.cloudinary.com/smartagence/image/upload/v1645710269/iniight_placeholder_qne20w.png";
  }

  return (
    <div className="relative w-1/3 h-[55px] mb-[5%] pointer mr-6">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <Image src={myImage} alt="" objectFit="contain" layout="fill" />
        </a>
      ) : (
        <Image src={myImage} alt="" objectFit="contain" layout="fill" />
      )}
    </div>
  );
};

PartnerLogo.defaultProps = {};

export default PartnerLogo;
