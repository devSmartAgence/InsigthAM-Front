import GridPattern from "./ui/GridPattern";
import useDeviceSize from "./hooks/useDevicesize";

export default function CoverPanel({ cover }) {
  const [viewportWidth, viewportHeight] = useDeviceSize();
  return (
    <div
      className={`w-screen h-[calc(100vh-${
        viewportWidth > 992 ? "110px" : "75px"
      })]`}
    >
      <div
        className={`flex flex-row h-[calc(100vh-${
          viewportWidth > 992 ? "110px" : "75px"
        })] `}
      >
        {/* COVER PANEL */}
        <div
          className={`bg-bottom flex w-screen lg:w-1/2 items-center justify-center`}
        >
          <GridPattern color={"deep-blue"} cover={cover} />
        </div>
      </div>
    </div>
  );
}
