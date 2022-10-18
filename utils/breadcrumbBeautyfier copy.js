// Themes beautyfing : from Pascale to original
export function breadcrumbLinkManager(path) {
  let link;
  let splitPath = path.split("/");
  switch (splitPath) {
    case splitPath[1] === "/nos-etudes":
      link = "/nos-etudes";
      break;
    case "EtudeCiblesClientele":
      link = "\xa0 \xa0 Études Cibles Clientèles \xa0 \xa0 ";
      break;

    default:
      link = "/";
      break;
  }
  return link;
}
