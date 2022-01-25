import Link from "next/link";

export default function Button({ label, type, aspect, slug, size }) {
  return (
    <Link href={`/etude/${slug}?populate=*`}>
      <button
        type="button"
        className={
          type === "primary"
            ? `w-[fit-content] ${
                size === "small"
                  ? "h-[30px] px-[20px] text-[10px]"
                  : "h-[50px] px-[35px] text-[12px]"
              }   text-indigo-100 transition-colors duration-150 bg-pink rounded-full focus:shadow-outline hover:bg-white uppercase text-white text-[12px]`
            : `w-[fit-content] ${
                size === "small"
                  ? "h-[30px] px-[20px] text-[10px]"
                  : "h-[50px] px-[35px] text-[12px]"
              }  text-${
                aspect === "dark" ? "white" : "deep-blue"
              } transition-colors duration-150 bg-${
                aspect === "dark" ? "deep-blue" : "transparent"
              } rounded-full border-pink border-[1px] focus:shadow-outline hover:bg-white uppercase text-white text-[12px] `
        }
      >
        {label}
      </button>
    </Link>
  );
}
