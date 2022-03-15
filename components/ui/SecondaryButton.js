import Link from "next/link";

export default function SecondaryButton({ label, href, style }) {
  return (
    <Link href={href ? href : "/"} passHref>
      <button
        type="button"
        className={`w-[fit-content] transition-colors duration-150 bg-transparent rounded-full sm:h-[50px] h-[40px] px-[35px] uppercase ${
          style === "light" ? "text-white" : "text-deep-blue"
        } sm:text-[12px] text-[8px] h-9 sm:px-[35px] px-4 border-pink border-[1px] hover:bg-deep-blue hover:text-white hover:bg-white hover:border-deep-blue`}
      >
        {label}
      </button>
    </Link>
  );
}
