import Layout from "../components/Layout";

export default function Study({ study }) {
  return (
    <Layout page={"Nos études"}>
      <h1 className="font-deep-blue">{study.data.attributes.title}</h1>
    </Layout>
  );
}

// Number of pages
export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/api/studies");
  const studies = await res.json();
  console.log("STUDY ici ====>", studies.data[0]);

  const paths = studies.data.map((study) => ({
    params: { slug: study.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Get datas for each page
export async function getStaticProps({ params }) {
  console.log("PARAMS=====>", params.slug);
  const id = params.slug;
  console.log("ID ===>", id);
  const res = await fetch(`http://localhost:1337/api/studies/${id}`);
  const study = await res.json();
  return {
    props: { study },
  };
}
