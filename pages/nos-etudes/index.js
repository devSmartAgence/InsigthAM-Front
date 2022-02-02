import Layout from "../../components/Layout";
import SummaryStudy from "../../components/ui/SummaryStudy";
import { themeBeautyfier } from "../../utils/themeBeautyfier";

export default function Thematiques({ resStudies }) {
  let arrThemes = resStudies.data.map;
  console.log("LISTE =====>", arrThemes);
  return (
    <Layout>
      <div className="bg-deep-blue w-screen h-screen">
        <div className="flex flex-col w-screen items-center">
          <h1 className="uppercase text-white text-[2vmax] mt-[calc(5vmax+110px)]">
            Nos études
          </h1>
          <div className="w-[2.3vmax] h-[0.3vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"></div>
          <p className="font-serif text-[1vmax] text-white mb-[1vmax] w-[60vw] text-center">
            Chapô lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            pharetra semper metus fermentum lobortis. Pellentesque semper risus
            vel erat posuere.
          </p>
          <div className="flex flex-wrap justify-center bg-deep-blue max-w-[1050px] gap-y-4 gap-x-4 lg:gap-8">
            {resStudies.data.map((study, index) => (
              <SummaryStudy
                title={themeBeautyfier(study.attributes.theme)}
                theme={study.attributes.theme}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const studies = await fetch("http://localhost:1337/api/studies");
  const resStudies = await studies.json();

  return {
    props: {
      resStudies,
    },
  };
}
