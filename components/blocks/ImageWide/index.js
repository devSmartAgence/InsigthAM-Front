const ImageWide = ({ image }) => {
  let myImage = image.data.attributes.url;
  console.log("MYIMAGE ====>", image);
  return (
    <div class="relative overflow-hidden pb-[56.25%] mb-[5%]">
      <img
        src={`${process.env.DB_HOST}/api${myImage}`}
        alt=""
        class="absolute h-full w-full object-cover"
      />
    </div>
  );
};

ImageWide.defaultProps = {};

export default ImageWide;
