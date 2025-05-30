import { adjustPrices } from '../handlers/adjust-prices.js';

export default async function handler(req, res) {
  try {
    await adjustPrices();
    res.status(200).send("Prices adjusted successfully.");
  } catch (error) {
    console.error("Error adjusting prices:", error);
    res.status(500).send("Error adjusting prices.");
  }
}