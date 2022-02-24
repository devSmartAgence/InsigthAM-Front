import Image from "next/image";

const ImageWide = ({ image }) => {
  let myImage = image.data.attributes.url;
  return (
    <div className="relative overflow-hidden pb-[56.25%] mb-[5%]">
      <Image
        src={
          myImage
            ? myImage
            : "https://res.cloudinary.com/smartagence/image/upload/v1645710269/iniight_placeholder_qne20w.png"
        }
        blurDataURL={
          myImage
            ? myImage
            : "https://res.cloudinary.com/smartagence/image/upload/v1645710269/iniight_placeholder_qne20w.png"
        }
        alt=""
        className="absolute h-full w-full object-cover"
        layout="fill"
      />
    </div>
  );
};

ImageWide.defaultProps = {};

export default ImageWide;
