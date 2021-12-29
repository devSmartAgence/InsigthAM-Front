import { motion, transform } from "framer-motion";
import Link from "next/link";
import Button from "./ui/Button";
import GridPattern from "./ui/GridPattern";

export default function ContentPreviewV2({
  itemsCount,
  reversed,
  heading,
  theme,
  title,
  description,
  cover,
  index,
}) {
  return (
    <div className="w-screen h-[calc(100vh-110px)]">
      <div
        className={`flex flex-row${
          reversed === true && "-reverse"
        } h-[calc(100vh-110px)]`}
      >
        {/* CONTENTPANEL     */}
        <motion.div
          className={`bg-beige w-1/2 font-sans flex items-center flex-col justify-center ${
            reversed === true && `translate-y-[calc(3*100vh)]`
          }`}
        >
          <GridPattern color={"white"} />
          <div className="z-20 pr-[7vmax] pl-[7vmax]">
            <div className="z-20">
              <p className="text-deep-blue font-sans text-[1.2vmax] mb-[1vmax] uppercase">
                {heading}
              </p>

              <p className="uppercase text-pink text-[0.7vmax]">{theme}</p>
              <div className="w-[2.5vmax] h-[0.4vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"></div>
              <h2 className="text-deep-blue font-serif text-[3vmax] mb-[1vmax] leading-[3.7vmax]  ">
                {title}
              </h2>
              <p className="font-serif text-[1vmax] text-black mb-[1vmax]">
                {description}
              </p>
              <div className="mb-[3vmax]">
                <Link href="/">
                  <a className="font-serif text-[0.9vmax] underline mt-[2vmax] mb-[2vmax]">
                    Mon lien vers un site
                  </a>
                </Link>
              </div>
              <div>
                <Button label={"Nous connaître"} type={"primary"} />
                <Button
                  label={"Nos études"}
                  type={"secondary"}
                  aspect={"light"}
                />
              </div>
            </div>
          </div>
        </motion.div>
        {/* CONTENTPANEL     */}

        {/* COVER PANEL */}
        <motion.div
          className={`bg-panel${index} bg-bottom flex w-1/2 items-center justify-center h-[calc(100vh-110px)] ${
            reversed === false ? `translate-y-[400px]]` : ""
          }`}
        >
          <GridPattern color={"deep-blue"} />
        </motion.div>
      </div>
    </div>
  );
}
