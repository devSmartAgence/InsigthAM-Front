const ImageWide = ({ image }) => {
  let myImage = image.data.attributes.url;
  console.log("MYIMAGE ====>", myImage);
  return (
    <div class="relative overflow-hidden pb-[56.25%] mb-[60px]">
      <img
        src={`http://localhost:1337${myImage}`}
        alt=""
        class="absolute h-full w-full object-cover"
      />
    </div>
  );
};

ImageWide.defaultProps = {};

export default ImageWide;
