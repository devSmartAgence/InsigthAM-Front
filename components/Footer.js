import Link from "next/link";
import Button from "./ui/Button";
export default function Footer() {
  return (
    <footer className="pb-[30px] bg-deep-blue relative px-[40px] pt-[30px] md:pb-[80px]">
      <div className="mb-[40px] flex md:mb-[70px]">
        <div className="items-center flex flex-col place-content-between w-screen xl:flex-row">
          <div className="flex flex-col md:flex-row">
            <Link href="/">
              <img
                className="h-16 cursor-pointer md:mr-[60px]"
                src="/insightAM_white.svg"
                alt="Logo Insight AM"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/pascalskoenig/?originalSubdomain=fr#experience">
              <img
                className="h-16 cursor-pointer mt-[20px] md:ml-8 md:mt-0"
                src="/Linkedin.svg"
                alt="Linkedin"
              />
            </Link>
          </div>
          <nav className="mt-[30px] xl:mt-0">
            <ul className="flex-col md:flex items-center text-deep-blue md:flex-row">
              <Link href="/Apropos">
                <li className="text-[12px] text-white cursor-pointer uppercase text-center mb-[20px] md:text-left md:mb-0 md:mr-[5vw]">
                  À propos
                </li>
              </Link>
              <Link href="/etudes">
                <li className="text-[12px] text-white cursor-pointer uppercase text-center mb-[20px] md:text-left md:mb-0 md:mr-[5vw]">
                  Nos études
                </li>
              </Link>
              <Link href="/CGVCVU">
                <li className="text-[12px] text-white cursor-pointer uppercase text-center mb-[20px] md:text-left md:mb-0 md:mr-[5vw]">
                  CGV/CVU
                </li>
              </Link>
              <Link href="/legal">
                <li className="text-[12px] text-white cursor-pointer uppercase text-center mb-[20px] md:text-left md:mb-0 md:mr-[5vw]">
                  MENTIONS LÉGALES
                </li>
              </Link>
              <Button type={"secondary"} style={"dark"} label={"Contact"} />
            </ul>
          </nav>
        </div>
      </div>
      <div className="text-white uppercase text-center text-[12px] xl:text-right">
        Ce site est une création du Groupe smartagence
      </div>
    </footer>
  );
}
