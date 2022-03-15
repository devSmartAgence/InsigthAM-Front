import Link from "next/link";

export default function PrimaryButton({
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
        className={`w-[fit-content] sm:h-[50px] h-9 sm:px-[35px] px-4 sm:text-[12px] text-[8px] border-pink border-[1px] hover:bg-white hover:text-white transition-colors duration-150 bg-pink rounded-full hover:bg-deep-blue hover:border-pink uppercase text-white`}
      >
        {label}
      </button>
    </Link>
  );
}
