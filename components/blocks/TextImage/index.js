import Image from "next/image";

const TextImage = ({ text, image, position }) => {
  const myImage = image.data.attributes.url;
  return (
    <div className={`mb-[5%]`}>
      <div
        className={`w-full ml-0 ${
          position
            ? "mr-15 md:float-left md:w-[51.7%] "
            : "ml-15 md:float-right md:w-[51.7%] md:ml-15"
        }`}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_DB_HOST}/${myImage}`}
          alt=""
          className="mb-[35px]"
          layout="fill"
        />
      </div>
      <div className={`font-serif leading-[30px]`}>{text}</div>
    </div>
  );
};

TextImage.defaultProps = {};

export default TextImage;
