import { Button } from '@shopify/polaris';

export default function HomePage() {
  const adjustPrices = async () => {
    await fetch('/api/adjust');
    alert('Prisene er justert!');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>PricePsych</h1>
      <Button onClick={adjustPrices} primary>
        Juster priser nå
      </Button>
    </div>
  );
}