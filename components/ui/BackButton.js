import { useRouter } from "next/router";

export default function BackButton({ style, label }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      type="button"
      className={
        style === "light"
          ? `w-[fit-content] h-[50px] px-[35px] text-[12px] text-deep-blue transition-colors duration-150 bg-transparent rounded-full border-pink border-[1px] uppercase focus:shadow-outline hover:bg-pink  hover:text-white text-[12px]`
          : `w-[fit-content] text-[12px] text-white transition-colors duration-150 bg-transparent rounded-full focus:shadow-outline`
      }
    >
      <div className="flex items-center">
        <div className="mr-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6.87"
            height="12.544"
            viewBox="0 0 6.87 12.544"
          >
            <path
              id="Tracé_195"
              data-name="Tracé 195"
              d="M.428,5.816,5.482.448A.632.632,0,0,1,6.375.423a.651.651,0,0,1,.024.893l-4.056,4.3h.008l-.186.2a.737.737,0,0,0-.178.434.566.566,0,0,0,.178.435l.186.2H2.343l4.056,4.3a.661.661,0,0,1-.024.893.633.633,0,0,1-.893-.025L.428,6.685A.562.562,0,0,1,.25,6.25.731.731,0,0,1,.428,5.816Z"
              transform="translate(0 0.044)"
              fill="#000000"
              stroke="#243063"
              strokeiterlimit="10"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        {label}
      </div>
    </button>
  );
}
