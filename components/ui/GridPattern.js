import Pattern from "./Pattern";

export default function GridPattern({ color, cover }) {
  return (
    <>
      <div className="z-1 absolute w-[50vw] h-[calc(100vh-110px)] grid grid-cols-2 grid-rows-2 overflow-hidden">
        <Pattern color={color} />
        <Pattern color={color} />
        <Pattern color={color} />
        <Pattern color={color} />
      </div>

      {color === "deep-blue" && cover && (
        <img
          src={"http://localhost:1337" + cover}
          className="w-full h-full object-cover"
        ></img>
      )}
    </>
  );
}
