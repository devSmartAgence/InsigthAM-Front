import PrimaryButton from "./ui/PrimaryButton";
import Image from "next/image";

export default function StudyPreview({
  title,
  cover,
  slug,
  theme,
  introduction,
}) {
  console.log(introduction);
  return (
    <div className="max-w-[580px] bg-white p-[45px] mb-[35px]">
      <h2 className="font-serif text-[24px] text-deep-blue mb-[25px]">
        {title}
      </h2>
      <div className="bg-beige flex items-center justify-center content-center p-[6%] mb-[30px] relative h-[315px]">
        <Image
          src={cover}
          placeholder="blur"
          blurDataURL={cover}
          alt={`Couverture ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="font-serif text[20px] leading-[30px] mb-[30px]">
        {introduction}
      </p>
      <PrimaryButton
        label={"Résultat et téléchargement de l'étude"}
        href={`/nos-etudes/${theme}/${slug}`}
      ></PrimaryButton>
    </div>
  );
}
