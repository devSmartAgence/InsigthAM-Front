import delve from "dlv";
import PartnerLogo from "./partnerLogo";

const Partners = ({ partnerLogo }) => {
  return (
    <div className="flex leading-[48px] align-center">
      {partnerLogo &&
        partnerLogo.map((item, index) => (
          <PartnerLogo key={index} image={delve(item, "image")} />
        ))}
    </div>
  );
};

Partners.defaultProps = {};

export default Partners;
