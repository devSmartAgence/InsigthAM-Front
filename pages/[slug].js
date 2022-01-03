export default function Study({ study }) {
  return <h1 className="font-deep-blue">{study.data.attributes.heading}</h1>;
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
  console.log("STUDYYYYYYYYY ====>", study);
  return {
    props: { study },
  };
}
