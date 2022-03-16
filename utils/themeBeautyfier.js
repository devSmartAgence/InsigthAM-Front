// Themes beautyfing : from Pascale to original
export function themeBeautyfier(theme) {
  switch (theme) {
    case "EtudesReferencementThematique":
      theme = "Études Référencement Thématique";
      break;
    case "EtudeCiblesClientele":
      theme = "Études Cibles Clientèles";
      break;
    case "EtudesNotorietePositionnement":
      theme = "Études Notoriété et/ou Positionnement";
      break;
    case "EtudesTestingProduit":
      theme = "Etude Testing produits";
      break;
    case "BarometresInstitutionnels":
      theme = "Baromètres institutionnels";
      break;
    default:
      theme = "Thématique";
      break;
  }
  return theme;
}
