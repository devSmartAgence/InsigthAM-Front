import Pattern from "./Pattern";

export default function GridPattern({ color }) {
  return (
    <div className="z-1 absolute w-[50vw] h-[calc(100vh-110px)] grid grid-cols-2 grid-rows-2">
      <Pattern color={color} />
      <Pattern color={color} />
      <Pattern color={color} />
      <Pattern color={color} />
    </div>
  );
}
