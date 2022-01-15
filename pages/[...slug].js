import delve from "dlv";

import Layout from "../components/Layout";
//UI components
import Button from "../components/ui/Button";
import MainList from "../components/ui/mainList";
import MainText from "../components/ui/MaintText";
import ImagePanoramic from "../components/ui/ImagePanoramic";
import MainVerbatim from "../components/ui/mainVerbatim";
import MainKeyNumberCollection from "../components/ui/MainKeyNumberCollection";

//Strapi tools for dynamics zones
import { getDataDependencies } from "./services/api";
import { redirectToHomepage, getData } from "../utils";
import { getLocalizedParams } from "../utils/localize";
import BlockManager from "../components/shared/BlockManager";

const Universals = ({ pageData }) => {
  const blocks = delve(pageData, "attributes.blocks");
  return (
    <Layout page={"Insight AM - Accueil"}>
      <div className="w-full bg-beige"></div>

      <div className="mt-[110px] bg-beige flex flex-col items-center">
        <div className="flex w-full items-center justify-center h-[134px] ">
          <Button label="< Retour" />
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
      </div>
    </Layout>
  );
  // <Layout page={"Insight AM - Accueil"}>
  //   <div className="w-full bg-beige"></div>
  //   <div className="mt-[110px] bg-beige flex flex-col items-center">
  //     <div className="flex w-full items-center justify-center h-[134px] ">
  //       <Button label="< Retour" />

  //       <div className="flex flex-col items-center ">
  //         <div className="font-sans text-deep-blue text-[13px] uppercase mb-[13px]">
  //           {pageData.attributes.theme}
  //         </div>

  //         <div className="w-[40px] h-[6px] bg-pink"></div>
  //       </div>
  //     </div>
  //     <div className="flex flex-col max-w-[1230px] bg-white px-[180px] pt-[75px]">
  //       <div>
  //         <h1 className="font-sans text-deep-blue text-[40px] text-center leading-[48px] mb-[60px] ">
  //           {pageData.attributes.title}
  //         </h1>
  //         <p className="font-serif font-bold text-black text-[20px] text-center leading-[30px] mb-[80px]">
  //           Fidelity International a fait confiance à Insight AM pour mener
  //           une étude sous forme de regards croisés auprès des épargnants
  //           français (plus de 1000 épargnants interrogés) et des distributeurs
  //           (plus de 400 Conseillers en Gestion de Patrimoine et Banques
  //           Privées consultés) sur leurs perceptions de la baisse du rendement
  //           du Fonds Euros.
  //         </p>
  //       </div>
  //       <div>
  //         <MainH2 title={"Détail de l’étude (H2)"} />
  //         <MainH3 title={"L’environnement économique (H3)"} />
  //         <MainList />
  //         <MainText
  //           text={`Si le fonds en euros reste le placement privilégié des épargnants français dans le cadre de contrats d’assurance vie, dont les encours s’élevaient à 1 741 milliards d’euros (fin mars 2020), la baisse de ses rendements a connu une sensible accélération. Alors que les souscripteurs en assurance-vie se voient désormais davantage sollicités pour mobiliser leur poche UC, en vue de compenser la baisse des rendements, nous avons souhaité les interroger, ainsi que leurs distributeurs afin de recueillir leurs perceptions et leurs attentes.`}
  //         />
  //         <MainH2 title={"Image panoramique (H2)"} />
  //         <ImagePanoramic
  //           src={
  //             "https://images.unsplash.com/photo-1608249889684-e91ddbdd47cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
  //           }
  //         />
  //         <MainH2 title={"Verbatim (H2)"} />
  //         <MainText
  //           text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra imperdiet libero a aliquet. Vivamus fermentum finibus porta. Nam vel erat a nisi volutpat scelerisque sit amet id tellus.`}
  //         />
  //         <MainVerbatim
  //           text={
  //             "Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut."
  //           }
  //           author={"Stéphane Janin"}
  //         />
  //         <MainText
  //           text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra imperdiet libero a aliquet. Vivamus fermentum finibus porta. Nam vel erat a nisi volutpat scelerisque sit amet id tellus.`}
  //         />
  //         <MainH2 title={"Chiffres clés (H2)"} />
  //         <MainText
  //           text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra imperdiet libero a aliquet. Vivamus fermentum finibus porta. Nam vel erat a nisi volutpat scelerisque sit amet id tellus.`}
  //         />
  //         <MainKeyNumberCollection />

  //         <MainText
  //           text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra imperdiet libero a aliquet. Vivamus fermentum finibus porta. Nam vel erat a nisi volutpat scelerisque sit amet id tellus.`}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // </Layout>
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
