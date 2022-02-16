// Get the url of the Strapi API based om the env variable or the default local one.
export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_DB_HOST}/api`
  }${path}`;
}

// This function will get the url of your medias depending on where they are hosted
export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }
  if (url.startsWith("http") || url.startsWith("/")) {
    return url;
  }
  return `${
    process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_DB_HOST}/api`
  }${url}`;
}

// Handle the redirection to the homepage if the page we are browsing doesn't exists
export function redirectToHomepage() {
  return {
    redirect: {
      destination: `/`,
      permanent: false,
    },
  };
}

// This function will build the url to fetch on the Strapi API
export function getDataStudy(slug, locale) {
  const slugToReturn = `studies/${slug}`;
  const apiUrl = `/studies/${slug}?populate[blocks][populate]=*&populate[cover]=*`;

  return {
    data: getStrapiURL(apiUrl),
    slug: slugToReturn,
  };
}

// This function will build the url to fetch on the Strapi API
export function getDataAbout(slug, locale) {
  const slugToReturn = `about`;
  const apiUrl = `/about?populate[blocks][populate]=*&populate[cover]=*`;

  return {
    data: getStrapiURL(apiUrl),
    slug: slugToReturn,
  };
}

// This function will build the url to fetch on the Strapi API
export function getDataMethode(slug, locale) {
  const slugToReturn = `methodes`;
  const apiUrl = `/methodes?populate[blocks][populate]=*&populate[cover]=*`;

  return {
    data: getStrapiURL(apiUrl),
    slug: slugToReturn,
  };
}

// This function will build the url to fetch on the Strapi API
export function getDataCGV(slug, locale) {
  const slugToReturn = `cgv-cgu`;
  const apiUrl = `/cgv?populate[blocks][populate]=*&populate[cover]=*`;

  return {
    data: getStrapiURL(apiUrl),
    slug: slugToReturn,
  };
}

// This function will build the url to fetch on the Strapi API
export function getDataContact(slug, locale) {
  const slugToReturn = `contact`;
  const apiUrl = `/contact?populate[blocks][populate]=*&populate[cover]=*`;

  return {
    data: getStrapiURL(apiUrl),
    slug: slugToReturn,
  };
}
