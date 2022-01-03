import Link from "next/link";

export default function Button({ label, type, aspect, index }) {
  return (
    <Link href={`/${index}`}>
      <button
        type="button"
        className={
          type === "primary"
            ? "w-[fit-content] h-[50px] text-[12px] px-[35px] text-indigo-100 transition-colors duration-150 bg-pink rounded-full focus:shadow-outline hover:bg-white uppercase text-white text-[12px] mr-[20px]"
            : `w-[fit-content] h-[50px] px-[35px] text-[12px] text-${
                aspect === "dark" ? "white" : "deep-blue"
              } transition-colors duration-150 bg-${
                aspect === "dark" ? "deep-blue" : "transparent"
              } rounded-full border-pink border-[1px] focus:shadow-outline hover:bg-white uppercase text-white text-[12px] mr-[20px]`
        }
      >
        {label}
      </button>
    </Link>
  );
}
