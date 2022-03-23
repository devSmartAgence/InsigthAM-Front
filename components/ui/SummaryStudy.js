import Link from "next/link";

export default function SummaryStudy({ title, theme }) {
  let linkManager = (theme) => {
    let link;
    switch (theme) {
      case "EtudesReferencementThematique":
      case "EtudeCiblesClientele":
      case "BarometresInstitutionnels":
        link = `/nos-etudes/${theme}`;
        break;
      case "EtudesNotorietePositionnement":
        link = `/nos-etudes/EtudesNotorietePositionnement/methode`;
        break;
      case "EtudesTestingProduit":
        link = `/nos-etudes/EtudesTestingProduit/methode`;
        break;
      default:
        link = "/";
    }
    return link;
  };
  return (
    <Link href={linkManager(theme)} passHref>
      <div className="cursor-pointer flex flex-col text-center justify-center h-[10vmax] w-4/5 bg-white text-deep-blue font-serif text-md font-bold px-16 md:text-2xl lg:w-1/2 lg:max-w-[508px]">
        <p>{title}</p>
      </div>
    </Link>
  );
}
