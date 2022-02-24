import Image from "next/image";

const ImageWide = ({ image }) => {
  console.log("IMAGE ===>", image.data);
  let myImage;
  if (image.data) {
    myImage = image.data.attributes.url;
  } else {
    myImage =
      "https://res.cloudinary.com/smartagence/image/upload/v1645710269/iniight_placeholder_qne20w.png";
  }

  return (
    <div className="relative overflow-hidden pb-[56.25%] mb-[5%]">
      <Image
        src={myImage}
        blurDataURL={myImage}
        alt=""
        className="absolute h-full w-full object-cover"
        layout="fill"
      />
    </div>
  );
};

ImageWide.defaultProps = {};

export default ImageWide;
