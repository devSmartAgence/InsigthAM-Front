import Link from "next/link";

export default function Button({
  label,
  type,
  style,
  slug,
  size,
  theme,
  href,
}) {
  return (
    <Link href={href ? href : "/"} passHref>
      <button
        type="button"
        className={
          type === "primary"
            ? `w-[fit-content] border-pink border-[1px] hover:bg-white hover:text-deep-blue  ${
                size === "small"
                  ? "h-[30px] px-[20px] text-[10px]"
                  : "h-[50px] px-[35px] text-[12px]"
              }   text-indigo-100 transition-colors duration-150 bg-pink rounded-full focus:shadow-outline hover:bg-white uppercase text-white text-[12px]`
            : `w-[fit-content] hover:bg-pink hover:text-white ${
                size === "small"
                  ? "h-[30px] px-[20px] text-[10px]"
                  : "h-[50px] px-[35px] text-[12px]"
              }  text-${
                style === "dark" ? "white" : "deep-blue"
              } transition-colors duration-150 bg-${
                style === "dark" ? "deep-blue" : "transparent"
              } rounded-full border-pink border-[1px] focus:shadow-outline hover:bg-white uppercase text-white text-[12px] `
        }
      >
        {label}
      </button>
    </Link>
  );
}
