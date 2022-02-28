import Link from "next/link";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import ReactMarkdown from "react-markdown";
import GridPattern from "./ui/GridPattern";

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
  hrefFirstButton,
  hrefSecondButton,
}) {
  return (
    <div className="w-screen h-[calc(100vh-110px)] w-screen">
      <div className={`flex flex-row h-[calc(100vh-110px)]`}>
        {/* CONTENTPANEL     */}
        <div
          className={`bg-beige w-screen lg:w-1/2 font-sans flex items-center flex-col justify-center`}
        >
          <GridPattern color={"white"} />
          <div className="z-20 pr-[7vmax] pl-[7vmax]">
            <div className="z-20">
              <p className="text-deep-blue font-sans text-[1.2vmax] mb-[1vmax] uppercase ">
                {heading}
              </p>

              <p className="uppercase text-pink text-[0.7vmax]">
                {themeBeautyfier(theme)}
              </p>
              <div className="w-[2.5vmax] h-[0.4vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"></div>
              <h2 className="text-deep-blue font-serif text-[3vmax] mb-[1vmax] leading-[3.7vmax]">
                {title}
              </h2>

              <ReactMarkdown className="font-serif text-[1vmax] text-black mb-[1vmax]">
                {description}
              </ReactMarkdown>

              <div className="mb-[3vmax]">
                {link && (
                  <Link href={href} passHref>
                    <a className="font-serif text-[0.9vmax] underline mt-[2vmax] mb-[2vmax]">
                      {link}
                    </a>
                  </Link>
                )}
              </div>
              <div className="flex ">
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
