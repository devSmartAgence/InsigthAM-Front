import Head from "next/head";
import Image from "next/image";
import Button from "./ui/Button";
export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>

      <header className="flex h-[110px] w-screen bg-gray-100 justify-between items-center pl-[70px] pr-[70px]">
        <img
          className="h-16 ml-8 "
          src="/insightAM.svg"
          alt="Logo Insight AM"
        />
        <nav>
          <ul className="flex items-center text-deep-blue">
            <li className="mr-[50px] text-[12px]">À propos</li>
            <li className="mr-[50px] text-[12px]">Nos études</li>
            <Button type={"secondary"} aspect={"light"} label={"Contact"} />
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
