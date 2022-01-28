import Link from "next/link";

export default function SummaryStudy({ title }) {
  return (
    <Link href="/etudes/listeEtudes?theme=EtudesReferencementThematique">
      <div className="cursor-pointer flex flex-col text-center justify-center h-[100px] w-4/5 bg-white text-deep-blue font-serif text-[25px] font-bold px-16 lg:w-1/2 lg:max-w-[508px]">
        <p>{title}</p>
      </div>
    </Link>
  );
}
