import Pattern from "./Pattern";
import Image from "next/image";
import useDeviceSize from "../hooks/useDevicesize";
export default function GridPattern({ color, cover }) {
  const [viewportWidth, viewportHeight] = useDeviceSize();
  return (
    <>
      <div
        className={`z-1 absolute w-full lg:w-[50vw] h-full lg:h-[calc(100vh-${
          viewportWidth > 992 ? "110px" : "75px"
        })] grid grid-cols-2 grid-rows-2 overflow-hidden`}
      >
        <Pattern color={color} />
        <Pattern color={color} />
        <Pattern color={color} />
        <Pattern color={color} />
      </div>

      {color === "deep-blue" && cover && (
        <div className="w-full h-full relative -z-10">
          <Image
            src={cover}
            blurDataURL={cover}
            layout="fill"
            objectFit="cover"
            alt="Pattern"
          />
        </div>
      )}
    </>
  );
}
