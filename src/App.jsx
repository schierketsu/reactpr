import { Layout } from 'antd';
import AppSider from './components/layout/AppSider';
import AppHeader from './components/layout/AppHeader';
import AppContent from './components/layout/AppContent';
import { CryptoContextProvider } from './context/crypto-context';

export default function App() {
  return (
    <CryptoContextProvider>
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
    </CryptoContextProvider>
  )
}


