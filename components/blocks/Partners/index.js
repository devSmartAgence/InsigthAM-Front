import delve from "dlv";
import PartnerLogo from "./partnerLogo";

const Partners = ({ partnerLogo }) => {
  return (
    <div className="flex mb-[5%] flex-wrap">
      {partnerLogo &&
        partnerLogo.map((item, index) => (
          <PartnerLogo key={index} image={delve(item, "image")} />
        ))}
    </div>
  );
};

Partners.defaultProps = {};

export default Partners;
