import Link from "next/link";

export default function SecondaryButton({ label, href }) {
  return (
    <Link href={href ? href : "/"} passHref>
      <button
        type="button"
        className={`w-[fit-content] transition-colors duration-150 bg-transparent rounded-full h-[50px] px-[35px] uppercase text-deep-blue text-[12px] border-pink border-[1px] hover:bg-deep-blue hover:text-white hover:bg-white hover:border-deep-blue `}
      >
        {label}
      </button>
    </Link>
  );
}
