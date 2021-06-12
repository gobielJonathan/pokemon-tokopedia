import Layout from '@/component/layout'
import { GlobalStyles } from '@/styles/global'
import Provider from '../provider/index.provider'

function MyApp({ Component, pageProps }) {
  return <Provider>
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  </Provider>
}

export default MyApp
