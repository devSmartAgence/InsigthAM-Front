// Themes beautyfing : from Pascale to original
export function breadcrumbBeautyfier(path) {
  switch (path) {
    case "EtudesReferencementThematique":
      path = "\xa0 \xa0 Études Référencement Thématique \xa0 \xa0 ";
      break;
    case "EtudeCiblesClientele":
      path = "\xa0 \xa0 Études Cibles Clientèles \xa0 \xa0 ";
      break;
    case "EtudesNotorietePositionnement":
      path = "\xa0 \xa0 Études Notoriété & positionnement \xa0 \xa0 ";
      break;
    case "EtudesTestingProduit":
      path = "\xa0 \xa0 Études Testing produit \xa0 \xa0 ";
      break;
    case "BarometresInstitutionnels":
      path = "\xa0 \xa0 Baromètres institutionnels \xa0 \xa0 ";
      break;
    case "nos-etudes":
      path = "\xa0 \xa0 Nos études \xa0 \xa0 >";
      break;
    case "/a-propos":
      path = "\xa0 \xa0 À propos \xa0 \xa0 ";
      break;
    case "methode":
      path = "> \xa0 \xa0 Méthodologie \xa0 \xa0 ";
      break;
    case "contact":
      path = " \xa0 \xa0 Contact \xa0 \xa0 ";
      break;
    case "cgv-cgu":
      path = " \xa0 \xa0 CGV/CGU \xa0 \xa0 ";
      break;
    default:
      path = "";
      break;
  }
  return path;
}
