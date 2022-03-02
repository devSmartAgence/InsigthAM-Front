import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children, page }) {
  const router = useRouter();
  console.log("ROUTER ===>", router.route);
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>
      <Header />
      <main>{children}</main>
      {router.route !== "/" && <Footer />}
    </>
  );
}
