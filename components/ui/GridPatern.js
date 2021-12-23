import Pattern from "./Pattern";

export default function GridPattern({ color }) {
  return (
    <div className="z-1 absolute w-full h-[calc(100vh-110px)] grid grid-cols-2 grid-rows-2 left-0">
      <Pattern color={color} />
      <Pattern color={color} />
      <Pattern color={color} />
      <Pattern color={color} />
    </div>
  );
}
