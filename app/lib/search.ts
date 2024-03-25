// import { Client } from "@elastic/elasticsearch";
// import { AppLoadContext } from "@remix-run/cloudflare";

// export const client = async ({ context }) => {
//  return new Client({
//   node: context.cloudflare.env.ELASTIC_SEARCH_ENDPOINT,
//   auth: {
//    apiKey: context.cloudflare.env.ELASTIC_CATS_WIKI_API_KEY!,
//   },
//  });
// };

// /*
//  node: process.env.ELASTIC_SEARCH_ENDPOINT,
//  auth: {
//   apiKey: process.env.ELASTIC_CATS_WIKI_API_KEY!,
//  },
// */

// export const prepareBulkUploadData = <T>(data: T[]) => {
//  const bulkBody = [];

//  for (const item of data) {
//   bulkBody.push({ index: { _index: "search-catswiki" } });
//   bulkBody.push(item);
//  }

//  return bulkBody;
// };

// export const bulkUploadData = async <T>(data: T[], context: AppLoadContext) => {
//  const bulkUploadData = prepareBulkUploadData(data);

//  try {
//   const clientInstance = await client({ context });
//   const resp = await clientInstance.bulk({ body: bulkUploadData });
//   console.log("bulk upload response", resp);
//  } catch (err) {
//   console.error("Error in bulk uploading...", err);
//  }
// };

// export const getAllSearchDocuments = async ({ context }: AppLoadContext) => {
//  try {
//   const clientInstance = await client({ context });
//   const resp = await clientInstance.search({
//    index: "search-catswiki",
//   });
//   return resp;
//  } catch (err) {
//   console.error("Error in getting saerched documents", err);
//   return null;
//  }
// };
