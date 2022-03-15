import SecondaryButton from "./ui/SecondaryButton";
import Image from "next/image";

export default function StudyPreview({
  router,
  title,
  cover,
  slug,
  theme,
  introduction,
}) {
  return (
    <div className="max-w-[580px] bg-white md:p-[45px] p-[25px] mb-[35px]">
      <h2 className="font-serif md:text-2xl text-md text-deep-blue mb-[25px]">
        {title}
      </h2>
      {router !== "/nos-etudes/BarometresInstitutionnels" && (
        <div className="bg-beige flex items-center justify-center content-center p-[6%] mb-[30px] relative md:h-[315px] h-[200px]">
          <Image
            src={
              cover
                ? cover
                : "https://res.cloudinary.com/smartagence/image/upload/v1645710269/iniight_placeholder_qne20w.png"
            }
            placeholder="blur"
            blurDataURL={cover}
            alt={`Couverture ${title}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <p className="font-serif md:text-base text-sm md:leading-[30px] leading-[24px] mb-[30px]">
        {introduction}
      </p>
      <SecondaryButton
        label={"Résultat et téléchargement de l'étude"}
        href={`/nos-etudes/${theme}/${slug}`}
      ></SecondaryButton>
    </div>
  );
}
