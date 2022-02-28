import GridPattern from "./ui/GridPattern";

export default function CoverPanel({ cover }) {
  return (
    <div className="w-screen h-[calc(100vh-110px)]">
      <div className={`flex flex-row h-[calc(100vh-110px)] `}>
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
