import Button from "./ui/Button";
import Image from "next/image";

export default function StudyPreview({ title, cover }) {
  console.log("ICI ===>", `${process.env.NEXT_PUBLIC_DB_HOST}/${cover}`);
  return (
    <div className="max-w-[580px] bg-white p-[45px] mb-[35px]">
      <h2 className="font-serif text-[24px] text-deep-blue mb-[25px]">
        {title}
      </h2>
      <div className="bg-beige flex items-center justify-center content-center p-[6%] mb-[30px] relative h-[315px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_DB_HOST}${cover}`}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="font-serif text[20px] leading-[30px] mb-[30px]">
        Fidelity International a fait confiance à Insight AM pour mener une
        étude sous forme de regards croisés auprès des épargnants français (plus
        de 1000 épargnants interrogés) et des distributeurs… (plus de 400
        Conseillers en Gestion de Patrimoine et Banques Privées consultés) sur
        leurs perceptions de la baisse du rendement du Fonds Euros.
      </p>
      <Button label={"Résultat et téléchargement de l'étude"}></Button>
    </div>
  );
}
