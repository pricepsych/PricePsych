import { AppProvider, Button } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';

export default function HomePage() {
  const adjustPrices = async () => {
    await fetch('/api/adjust');
    alert('Prisene er justert!');
  };

  return (
    <AppProvider i18n={{}}>
      <div style={{ padding: 20 }}>
        <h1>PricePsych</h1>
        <Button primary onClick={adjustPrices}>Juster priser nå</Button>
      </div>
    </AppProvider>
  );
}