import delve from "dlv";
import PartnerLogo from "./partnerLogo";

const Partners = ({ partnerLogo }) => {
  return (
    <div className="flex mb-[60px] align-center">
      {partnerLogo &&
        partnerLogo.map((item, index) => (
          <PartnerLogo logo={delve(item, "partnerLogo")} />
        ))}
    </div>
  );
};

Partners.defaultProps = {};

export default Partners;
