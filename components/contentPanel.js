import { motion, transform } from "framer-motion";
import useDeviceSize from "../components/hooks/useDevicesize";

import Button from "./ui/Button";
import GridPattern from "./ui/GridPattern";

import { themeBeautyfier } from "../utils/themeBeautyfier";

export default function ContentPanel({
  itemsCount,
  heading,
  theme,
  title,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  index,
  itemPosition,
  itemHeight,
  slug,
}) {
  const [width, height] = useDeviceSize();

  return (
    <div className="w-screen h-[calc(100vh-110px)] w-screen">
      <div className={`flex flex-row h-[calc(100vh-110px)]`}>
        {/* CONTENTPANEL     */}
        <motion.div
          className={`bg-beige w-1/2 font-sans flex items-center flex-col justify-center`}
          initial={false}
          animate={{ y: itemPosition }}
          transition={{ ease: "anticipate", duration: 1 }}
        >
          <GridPattern color={"white"} />
          <div className="z-20 pr-[7vmax] pl-[7vmax]">
            <div className="z-20">
              <p className="text-deep-blue font-sans text-[1.2vmax] mb-[1vmax] uppercase">
                {heading}
              </p>

              <p className="uppercase text-pink text-[0.7vmax]">
                {themeBeautyfier(theme)}
              </p>
              <div className="w-[2.5vmax] h-[0.4vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"></div>
              <h2 className="text-deep-blue font-serif text-[3vmax] mb-[1vmax] leading-[3.7vmax]  ">
                {title}
              </h2>
              <p className="font-serif text-[1vmax] text-black mb-[1vmax]">
                {description}
              </p>
              <div className="mb-[3vmax]">
                <a className="font-serif text-[0.9vmax] underline mt-[2vmax] mb-[2vmax]">
                  Mon lien vers un site
                </a>
              </div>
              <div>
                {primaryButtonLabel && (
                  <Button
                    label={primaryButtonLabel}
                    type={"primary"}
                    index={index}
                    slug={slug}
                  />
                )}

                {secondaryButtonLabel && (
                  <Button
                    label={secondaryButtonLabel}
                    type={"secondary"}
                    style={"light"}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
        {/* CONTENTPANEL     */}
      </div>
    </div>
  );
}
