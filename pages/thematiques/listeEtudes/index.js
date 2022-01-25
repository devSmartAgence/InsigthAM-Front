import Layout from "../../../components/Layout";
import Button from "../../../components/ui/Button";
import BackButton from "../../../components/ui/BackButton";
export default function about() {
  return (
    <Layout>
      <div className="bg-deep-blue ">
        <BackButton label={"< Retour"}></BackButton>
        <h1 className="text-white mt-[110px]">
          Etudes référencement thématique
        </h1>
        <div className="w-[580px] h-[772px] bg-white mt-[110px]">
          <h2 className="font-serif text-[24px] text-deep-blue">
            Fonds en Euros : quelle place demain dans l’épargne des Français ?
          </h2>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "http://localhost:1337/api/studies?filters[theme][$eq]=EtudesReferencementThematique"
  );
  const studies = await res.json();
  console.log("STUDIES 3 ======>", studies);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      studies,
    },
  };
}
