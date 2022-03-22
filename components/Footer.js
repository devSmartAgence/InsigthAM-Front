import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./ui/PrimaryButton";
export default function Footer() {
  return (
    <footer className="pb-[30px] bg-deep-blue relative px-[40px] pt-[30px] md:pb-[80px]">
      <div className="mb-[40px] flex md:mb-[70px]">
        <div className="items-center flex flex-col place-content-between w-screen xl:flex-row">
          <div className="flex flex-col items-center md:flex-row">
            <Link href="/">
              <div className="h-16 w-[105px] cursor-pointer relative md:mr-[60px]">
                <Image
                  src="https://res.cloudinary.com/smartagence/image/upload/v1645461568/Logo_Insight-AM_blanc_zbuvut.svg"
                  alt="Logo Insight AM"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/pascalskoenig/?originalSubdomain=fr#experience">
              <div className="h-16 relative w-[50px] cursor-pointer mt-[20px] md:ml-8 md:mt-0">
                <Image
                  src="https://res.cloudinary.com/smartagence/image/upload/v1645463647/Picto_Linkedin_uulogv.svg"
                  alt="Linkedin"
                  layout="fill"
                />
              </div>
            </Link>
          </div>
          <nav className="mt-[30px] xl:mt-0">
            <ul className="flex-col md:flex items-center text-deep-blue md:flex-row">
              <Link href="/a-propos">
                <li className="text-[12px] text-white cursor-pointer uppercase text-center mb-[20px] md:text-left md:mb-0 md:mr-[5vw]">
                  À propos
                </li>
              </Link>
              <Link href="/nos-etudes">
                <li className="text-[12px] text-white cursor-pointer uppercase text-center mb-[20px] md:text-left md:mb-0 md:mr-[5vw]">
                  Nos études
                </li>
              </Link>
              <Link href="/cgv-cgu">
                <li className="text-[12px] text-white cursor-pointer uppercase text-center mb-[20px] md:text-left md:mb-0 md:mr-[5vw]">
                  CGV/CGU
                </li>
              </Link>
              <Link href="/mentions-legales">
                <li className="text-[12px] text-white cursor-pointer uppercase text-center mb-[20px] md:text-left md:mb-0 md:mr-[5vw]">
                  MENTIONS LÉGALES
                </li>
              </Link>
              <PrimaryButton
                type={"secondary"}
                style={"dark"}
                label={"Contact"}
                href={"/contact"}
              />
            </ul>
          </nav>
        </div>
      </div>
      <div className="text-white uppercase text-center text-[12px] xl:text-right">
        <div className="flex justify-center xl:justify-end">
          <div>Ce site est une création du Groupe</div>
          <div className="ml-[6px] cursor-pointer">
            <Link href="https://www.smartagence.com/">
              <Image
                src="https://res.cloudinary.com/smartagence/image/upload/v1645784593/Logotype_smartagence_qvhjw2.svg"
                width="102px"
                height="16px"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
