import Pattern from "./Pattern";
import Image from "next/image";
import useDeviceSize from "../hooks/useDevicesize";
export default function GridPattern({ color, cover }) {
  const [viewportWidth, viewportHeight] = useDeviceSize();
  return (
    <>
      <div
        className={`z-1 absolute w-full lg:w-[50vw] ${
          viewportWidth > 992 ? "h-full" : "h-2/5"
        } lg:h-[calc(100vh-110px)] grid grid-cols-2 grid-rows-2 overflow-hidden`}
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
