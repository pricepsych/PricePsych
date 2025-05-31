const CLIENT_ID = "113efe2c61cd642221343f271a72928e";
const SCOPES = "read_products,write_products";
const REDIRECT_URI = "https://price-psych-dz3vi1e00-arqam-hamza-ahmads-projects.vercel.app/api/auth/callback";

export default async function handler(req, res) {
  const shop = req.query.shop;
  if (!shop) return res.status(400).send("Missing shop parameter");

  const installUrl = `https://${shop}/admin/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

  res.redirect(installUrl);
}
