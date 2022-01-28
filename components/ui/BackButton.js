import { useRouter } from "next/router";

export default function BackButton({ style, label }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      type="button"
      className={
        style === "light"
          ? `w-[fit-content] h-[50px] px-[35px] text-[12px] text-white transition-colors duration-150 bg-transparent rounded-full border-pink border-[1px] focus:shadow-outline hover:bg-white uppercase text-white text-[12px]`
          : `w-[fit-content] text-[12px] text-white transition-colors duration-150 bg-transparent rounded-full focus:shadow-outline`
      }
    >
      {label}
    </button>
  );
}
