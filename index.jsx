import { Page, Button } from '@shopify/polaris';

export default function HomePage() {
  const adjustPrices = async () => {
    await fetch('/api/adjust');
    alert('Prisene er justert!');
  };

  return (
    <Page title="PricePsych">
      <Button primary onClick={adjustPrices}>Juster priser nå</Button>
    </Page>
  );
}