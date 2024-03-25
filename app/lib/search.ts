import { Client } from "@elastic/elasticsearch";

export const client = new Client({
 node: process.env.ELASTIC_SEARCH_ENDPOINT,
 auth: {
  apiKey: process.env.ELASTIC_CATS_WIKI_API_KEY!,
 },
});

export const prepareBulkUploadData = (data: any[]) => {
 const bulkBody = [];

 for (const item of data) {
  bulkBody.push({ index: { _index: "search-catswiki" } });
  bulkBody.push(item);
 }

 return bulkBody;
};

export const bulkUploadData = async (data: any[]) => {
 const bulkUploadData = prepareBulkUploadData(data);

 try {
  const resp = await client.bulk({ body: bulkUploadData });
  console.log("bulk upload response", resp);
 } catch (err) {
  console.error("Error in bulk uploading...", err);
 }
};

export const getAllSearchDocuments = async () => {
 try {
  const resp = await client.search({
   index: "search-catswiki",
  });
  return resp;
 } catch (err) {
  console.error("Error in getting saerched documents", err);
  return null;
 }
};
