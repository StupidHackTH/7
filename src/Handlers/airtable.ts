import Airtable from "airtable";

const apiKey = import.meta.env.AIRTABLE_API_KEY;

const airtableMock = (() => {
  return {
    select: () => airtableMock("bruh"),
    all: () => [{ get: () => 69420 }],
  };
}) as unknown as ReturnType<Airtable["base"]>;

export const base =
  import.meta.env.MODE !== "development" || apiKey
    ? new Airtable({ apiKey: import.meta.env.AIRTABLE_API_KEY }).base(
        import.meta.env.AIRTABLE_BASE_ID
      )
    : airtableMock;
