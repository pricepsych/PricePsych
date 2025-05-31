import { AppProvider, Button } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';

export default function HomePage() {
  const installApp = () => {
    window.location.href = "/api/auth";
  };

  return (
    <AppProvider i18n={{}}>
      <div style={{ padding: 40 }}>
        <h1>Velkommen til PricePsych</h1>
        <p>Trykk på knappen under for å koble til Shopify.</p>
        <Button primary onClick={installApp}>Koble til Shopify</Button>
      </div>
    </AppProvider>
  );
}
