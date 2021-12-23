import Link from "next/link";
import Button from "./ui/Button";
export default function ContentPreview({
  contentTitle,
  tag,
  title,
  excerpt,
  link,
}) {
  return (
    <div className="z-20">
      {contentTitle && (
        <p className="text-deep-blue font-sans text-[1.2vmax] mb-[1vmax] uppercase">
          {contentTitle}
        </p>
      )}
      <p className="uppercase text-pink text-[0.7vmax]">{tag}</p>
      <div className="w-[2.5vmax] h-[0.4vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"></div>
      <h2 className="text-deep-blue font-serif text-[3vmax] mb-[1vmax] leading-[3.7vmax]  ">
        {title}
      </h2>
      <p className="font-serif text-[1vmax] text-black mb-[1vmax]">{excerpt}</p>
      <div className="mb-[3vmax]">
        <Link href="/">
          <a className="font-serif text-[0.9vmax] underline mt-[2vmax] mb-[2vmax]">
            {link}
          </a>
        </Link>
      </div>
      <div>
        <Button label={"Nous connaître"} type={"primary"} />
        <Button label={"Nos études"} type={"secondary"} aspect={"light"} />
      </div>
    </div>
  );
}
