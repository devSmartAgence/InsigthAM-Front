import Link from "next/link";
import Image from "next/image";
import SecondaryButton from "./ui/SecondaryButton";
import ReactMarkdown from "react-markdown";
import GridPattern from "./ui/GridPattern";
import useDeviceSize from "./hooks/useDevicesize";
import { themeBeautyfier } from "../utils/themeBeautyfier";

export default function ContentPanel({
  heading,
  theme,
  title,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  index,
  slug,
  link,
  linkLink,
  hrefFirstButton,
  hrefSecondButton,
}) {
  const [viewportWidth, viewportHeight] = useDeviceSize();
  console.log("VPPP===>", viewportWidth);
  return (
    <div
      className={`w-screen ${
        viewportWidth > 992
          ? `h-[calc(100vh-${viewportWidth > 992 ? "110px" : "75px"})]`
          : "h-full bg-beige"
      } w-screen`}
    >
      <div
        className={`flex flex-row ${
          viewportWidth > 992
            ? `h-[calc(100vh-${viewportWidth > 992 ? "110px" : "75px"})]`
            : "h-full items-center"
        }`}
      >
        {/* CONTENTPANEL     */}
        <div
          className={`bg-beige w-screen lg:w-1/2 font-sans flex items-center flex-col ${
            viewportWidth > 992 && "justify-center"
          } `}
        >
          {viewportWidth > 992 && <GridPattern color={"white"} />}
          <div className="z-20 pr-[7vmax] pl-[7vmax]">
            <div className="z-20 flex flex-col">
              <p className="text-deep-blue font-sans md:text-md text-xs mb-6 uppercase ">
                {heading}
              </p>

              <p className="uppercase text-pink md:text-sm text-[10px]">
                {themeBeautyfier(theme)}
              </p>
              <div className="w-[2.5vmax] h-[0.4vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"></div>
              <h2 className="text-deep-blue font-serif text-[2.6vmax] mb-[1vmax] leading-[3.4vmax]">
                {title}
              </h2>

              <ReactMarkdown className="font-serif md:text-lg text-xs text-black mb-[1vmax]">
                {description}
              </ReactMarkdown>
              {heading && (
                <div className="h-[55px] w-full sm:mb-24 mb-14">
                  <div className="flex items-end h-[30px]">
                    <div className="flex-grow h-px bg-black"></div>

                    <p className="flex-grow text-center md:text-sm text-xs font-bold font-serif w-min transform translate-y-1.5">
                      Ils nous font confiance
                    </p>

                    <div className="flex-grow h-px bg-black"></div>
                  </div>

                  <div className="relative h-[70px] w-full mt-4 ">
                    <Image
                      src="https://res.cloudinary.com/smartagence/image/upload/v1646390115/CPR-Am-vertical_ev0rzi.png"
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              )}
              {link && linkLink && (
                <div className="mb-[3vmax]">
                  <Link href={linkLink} passHref>
                    <a className="font-serif md:text-base text-xs underline mt-[2vmax] mb-[2vmax]">
                      {link}
                    </a>
                  </Link>
                </div>
              )}

              <div className="flex mt-6">
                {primaryButtonLabel && (
                  <SecondaryButton
                    label={primaryButtonLabel}
                    type={"primary"}
                    index={index}
                    slug={slug}
                    theme={theme}
                    href={hrefFirstButton}
                  />
                )}

                {secondaryButtonLabel && (
                  <div className="ml-[15px]">
                    <SecondaryButton
                      label={secondaryButtonLabel}
                      style={"dark"}
                      href={hrefSecondButton}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* CONTENTPANEL     */}
      </div>
    </div>
  );
}
