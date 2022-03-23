const ImageWide = ({ image }) => {
  let myImage;
  if (image.data) {
    myImage = image.data.attributes.url;
  } else {
    myImage =
      "https://res.cloudinary.com/smartagence/image/upload/v1645710269/iniight_placeholder_qne20w.png";
  }

  return (
    <div className="relative overflow-hidden w-full mb-[5%]">
      <img className="w-full h-auto" src={myImage} alt="Image pleine largeur" />
    </div>
  );
};

ImageWide.defaultProps = {};

export default ImageWide;
