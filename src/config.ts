export const clinicalTrialsUrl =
  "https://functions-hnf2-1-02.int-hn.nhn.no/api/v1/kliniskestudier";

export const episerverUrl = "http://localhost:51338/sokeside/snomed";

export const defaultBranch = "MAIN/SNOMEDCT-NO";

export const hosts = [
  "https://test.terminologi.ehelse.no",
  "https://qa.terminologi.ehelse.no",
  "https://terminologi.ehelse.no",
  "https://snowstorm.conteir.no",
];

export const codeSystems = [
  /* {
    branch: "MAIN/SNOMEDCT-NO/NCXP-ICS",
    id: "123456789",
    title: "NCxP",
  },
  {
    branch: "MAIN/SNOMEDCT-NO/ICPC2-ICS",
    id: "17551000202109",
    title: "ICPC2",
  },*/
  {
    branch: "MAIN/ICPC-2",
    id: "450993002",
    title: "ICPC-2B",
  },
  /* {
    branch: "MAIN/SNOMEDCT-NO/REFSET2",
    id: "816210007",
    title: "MedDRA",
  },
  {
    branch: "MAIN",
    id: "447562003",
    title: "ICD-10",
  },
  {
    branch: "MAIN/SNOMEDCT-NO/HELSEDIREKTORATET",
    id: "2041000202101",
    title: "ATC",
  },*/
];

export const referenceSets = [
  {
    id: "",
    title: "[Not specified]",
  },
  /*{
    id: "816210007",
    title: "MedDRA",
  },*/
  {
    id: "123456789",
    title: "NCxP - 123456789",
  },
  {
    id: "17551000202109",
    title: "Fastlege/ICPC2 - 17551000202109",
  },
  {
    id: "450993002",
    title: "ICPC-2B - 450993002",
  },
];

export const limit = "10";

export const languages = ["nb-NO", "nb", "nn", "no"];
