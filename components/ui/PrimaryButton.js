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
        className={`w-[fit-content] h-[50px] px-[35px] text-[12px] border-pink border-[1px] hover:bg-white hover:text-white transition-colors duration-150 bg-pink rounded-full hover:bg-deep-blue hover:border-pink uppercase text-white text-[12px]`}
      >
        {label}
      </button>
    </Link>
  );
}
