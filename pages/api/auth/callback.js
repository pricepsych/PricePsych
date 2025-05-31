import axios from 'axios';

const CLIENT_ID = "113efe2c61cd642221343f271a72928e";
const CLIENT_SECRET = "bb668293f841597eba34957c03660068";

export default async function handler(req, res) {
  const { shop, code } = req.query;

  if (!shop || !code) {
    return res.status(400).send("Missing shop or code.");
  }

  try {
    const tokenResponse = await axios.post(`https://${shop}/admin/oauth/access_token`, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code
    });

    const { access_token } = tokenResponse.data;

    // For testing: vis access_token
    res.status(200).send(`Access token: ${access_token}`);
  } catch (error) {
    console.error("Error exchanging token:", error?.response?.data || error);
    res.status(500).send("Failed to get access token");
  }
}
