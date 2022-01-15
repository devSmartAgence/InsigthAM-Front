export default function Pattern({ color }) {
  return (
    <div className="relative flex flex-col">
      <svg
        className="absolute z-0 w-1/2 h-1/2"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill={color === "deep-blue" ? "#253063" : "#FFFFFF"}
        preserveAspectRatio="none"
      >
        <polygon points="0 100, 0 0, 100 0" />
      </svg>
      <svg
        className="absolute rotate-180 bottom-0 right-0 w-1/2 h-1/2"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill={color === "deep-blue" ? "#253063" : "#FFFFFF"}
        preserveAspectRatio="none"
      >
        <polygon points="0 100, 0 0, 100 0" />
      </svg>
    </div>
  );
}
