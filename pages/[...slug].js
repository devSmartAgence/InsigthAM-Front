import delve from "dlv";

import Layout from "../components/Layout";
//UI components
import Button from "../components/ui/Button";
import BottomNavigation from "../components/ui/BottomNavigation";

//Strapi tools for dynamics zones
import { getDataDependencies } from "./services/api";
import { redirectToHomepage, getData } from "../utils";
import { getLocalizedParams } from "../utils/localize";
import BlockManager from "../components/shared/BlockManager";
import ContactForm from "../components/ui/Forms/ContactForm";

const Universals = ({ pageData }) => {
  const blocks = delve(pageData, "attributes.blocks");
  return (
    <Layout page={"Insight AM - Accueil"}>
      <div className="mt-[110px] bg-beige flex flex-col items-center">
        <div className="flex items-center justify-center h-[134px] relative w-full max-w-[1230px] ">
          <div className="absolute left-0">
            <Button label={"< Retour"} />
          </div>
          <div className="flex flex-col items-center ">
            <div className="font-sans text-deep-blue text-[13px] uppercase mb-[13px]">
              {pageData.attributes.theme}
            </div>
            <div className="w-[40px] h-[6px] bg-pink"></div>
          </div>
        </div>

        <div className="flex flex-col max-w-[1230px] bg-white px-[180px] pt-[75px]">
          <div>
            <h1 className="font-sans text-deep-blue text-[40px] text-center leading-[48px] mb-[60px] ">
              {pageData.attributes.title}
            </h1>
            <p className="font-serif font-bold text-black text-[20px] text-center leading-[30px] mb-[80px]">
              Fidelity International a fait confiance à Insight AM pour mener
              une étude sous forme de regards croisés auprès des épargnants
              français (plus de 1000 épargnants interrogés) et des distributeurs
              (plus de 400 Conseillers en Gestion de Patrimoine et Banques
              Privées consultés) sur leurs perceptions de la baisse du rendement
              du Fonds Euros.
            </p>
          </div>
          <div>{blocks && <BlockManager blocks={blocks} />}</div>
        </div>
        <BottomNavigation />
        <ContactForm />
      </div>
    </Layout>
  );
  //
};

export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query);

  try {
    const data = getData(slug, locale);
    const res = await fetch(delve(data, "data"));
    const json = await res.json();
    console.log("JSON ======", json);
    if (!json) {
      return redirectToHomepage();
    }

    const pageData = await getDataDependencies(delve(json.data, "0"));
    return {
      props: { pageData },
    };
  } catch (error) {}
}

export default Universals;
