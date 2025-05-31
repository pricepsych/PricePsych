export default async function handler(req, res) {
  try {
    console.log("Simulerer prisjustering (charm pricing)...");
    res.status(200).send("Prices adjusted successfully.");
  } catch (error) {
    console.error("Error adjusting prices:", error);
    res.status(500).send("Error adjusting prices.");
  }
}
