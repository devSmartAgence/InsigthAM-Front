import delve from "dlv";
import PartnerLogo from "./partnerLogo";

const Partners = ({ partnerLogo }) => {
  return (
    <div className="flex mb-[5%] flex-wrap self-start">
      {partnerLogo &&
        partnerLogo.map((item, index) => (
          <PartnerLogo key={index} image={delve(item, "image")} />
        ))}
    </div>
  );
};

Partners.defaultProps = {};

export default Partners;
