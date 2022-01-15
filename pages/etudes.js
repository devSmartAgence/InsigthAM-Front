import Layout from "../components/Layout";
import SummaryStudy from "../components/ui/SummaryStudy";

export default function Etudes() {
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
        </div>
        <div className="w-screen flex justify-center">
          <div className="bg-deep-blue w-[70vw] h-[45vw] grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <SummaryStudy title={"Lorem dolorit"} />
            <SummaryStudy title={"Lorem dolorit"} />
            <SummaryStudy title={"Lorem dolorit"} />
            <SummaryStudy title={"Lorem dolorit"} />
            <SummaryStudy title={"Lorem dolorit"} />
            <SummaryStudy title={"Lorem dolorit"} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
