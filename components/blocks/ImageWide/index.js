import Image from "next/image";

const ImageWide = ({ image }) => {
  let myImage = image.data.attributes.url;
  console.log("MYIMAGE ====>", image);
  return (
    <div className="relative overflow-hidden pb-[56.25%] mb-[5%]">
      <Image
        src={`http://localhost:1337/api${myImage}`}
        alt=""
        className="absolute h-full w-full object-cover"
        layout="fill"
      />
    </div>
  );
};

ImageWide.defaultProps = {};

export default ImageWide;
