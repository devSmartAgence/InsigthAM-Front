import Head from "next/head";
import Link from "next/link";
import Button from "./ui/Button";
export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>

      <header className="flex h-[110px] w-screen bg-gray-100 justify-between items-center pl-[70px] pr-[70px]">
        <Link href="/">
          <img
            className="h-16 ml-8 cursor-pointer"
            src="/insightAM.svg"
            alt="Logo Insight AM"
          />
        </Link>
        <nav>
          <ul className="flex items-center text-deep-blue">
            <Link href="/about">
              <li className="mr-[50px] text-[12px] cursor-pointer">À propos</li>
            </Link>
            <Link href="/etudes">
              <li className="mr-[50px] text-[12px] cursor-pointer">
                Nos études
              </li>
            </Link>
            <Button type={"secondary"} aspect={"light"} label={"Contact"} />
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
