import delve from "dlv";

// This function can merge required data but it is not used here.
export async function checkRequiredData(block) {
  return block;
}

// This function will get the data dependencies for every blocks.
export async function getDataStudyDependencies(json) {
  let blocks = delve(json, "blocks", []);
  blocks = await Promise.all(blocks.map(checkRequiredData));
  return {
    ...json,
    blocks,
  };
}

// This function will get the data dependencies for every blocks.
export async function getDataAboutDependencies(json) {
  let blocks = delve(json, "blocks", []);
  blocks = await Promise.all(blocks.map(checkRequiredData));
  return {
    ...json,
    blocks,
  };
}

// This function will get the data dependencies for every blocks.
export async function getDataMethodeDependencies(json) {
  let blocks = delve(json, "blocks", []);
  blocks = await Promise.all(blocks.map(checkRequiredData));
  return {
    ...json,
    blocks,
  };
}

// This function will get the data dependencies for every blocks.
export async function getDataCGVDependencies(json) {
  let blocks = delve(json, "blocks", []);
  blocks = await Promise.all(blocks.map(checkRequiredData));
  return {
    ...json,
    blocks,
  };
}

// This function will get the data dependencies for every blocks.
export async function getDataContactDependencies(json) {
  let blocks = delve(json, "blocks", []);
  blocks = await Promise.all(blocks.map(checkRequiredData));
  return {
    ...json,
    blocks,
  };
}
