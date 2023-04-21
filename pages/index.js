import HomeLayout from '@/components/homepage/HomeLayout'
import TradingPage from '@/pages/trading'
export default function Home({ Component, pageProps }) {
  return (
    <HomeLayout>
      <TradingPage />
    </HomeLayout>
  )
}
