import Image from "next/image";

const ImageWide = ({ image }) => {
  let myImage = image.data.attributes.url;
  return (
    <div className="relative overflow-hidden pb-[56.25%] mb-[5%]">
      <Image
        src={`${process.env.NEXT_PUBLIC_DB_HOST}${myImage}`}
        alt=""
        className="absolute h-full w-full object-cover"
        layout="fill"
      />
    </div>
  );
};

ImageWide.defaultProps = {};

export default ImageWide;
