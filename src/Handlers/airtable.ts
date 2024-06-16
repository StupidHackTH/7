import Airtable from "airtable";

const apiPat = import.meta.env.AIRTABLE_API_PAT;

const airtableMock = (() => {
  return {
    select: () => airtableMock("bruh"),
    all: () => [{ get: () => 69420 }],
  };
}) as unknown as ReturnType<Airtable["base"]>;

export const base =
  import.meta.env.MODE !== "development" || apiPat
    ? new Airtable({ apiKey: import.meta.env.AIRTABLE_API_PAT }).base(
        import.meta.env.AIRTABLE_BASE_ID
      )
    : airtableMock;
