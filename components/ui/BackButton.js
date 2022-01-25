import { useRouter } from "next/router";

export default function BackButton({ label }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      type="button"
      className="w-[fit-content] h-[50px] px-[35px] text-[12px] text-deep-blue transition-colors duration-150 bg-transparent rounded-full border-pink border-[1px] focus:shadow-outline hover:bg-white uppercase text-white text-[12px]"
    >
      {label}
    </button>
  );
}
