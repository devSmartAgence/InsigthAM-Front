const TextImage = ({ text, image, position }) => {
  const myImage = image.data.attributes.url;
  return (
    <div className={`flex ${position && "flex-row-reverse"} mb-[60px]`}>
      <div
        className={`font-serif ${
          position ? "pl-[60px]" : "pr-[60px]"
        } leading-[30px]`}
      >
        {text}
      </div>
      <div class="relative overflow-hidden pb-[36.2%] min-w-[420px]">
        <img
          src={`http://localhost:1337${myImage}`}
          alt=""
          class="absolute h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

TextImage.defaultProps = {};

export default TextImage;
