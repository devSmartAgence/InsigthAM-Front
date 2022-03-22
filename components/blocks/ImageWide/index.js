import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";

const ImageWide = ({ image }) => {
  let myImage;
  if (image.data) {
    myImage = image.data.attributes.url;
  } else {
    myImage =
      "https://res.cloudinary.com/smartagence/image/upload/v1645710269/iniight_placeholder_qne20w.png";
  }

  return (
    <div className="relative overflow-hidden h-[400px] w-full mb-[5%]">
      <SRLWrapper>
        <Image
          src={myImage}
          blurDataURL={myImage}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </SRLWrapper>
    </div>
  );
};

ImageWide.defaultProps = {};

export default ImageWide;
