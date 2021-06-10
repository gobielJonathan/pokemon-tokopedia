import Layout from '@/component/layout'
import Provider from '../provider/index.provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </Provider>
}

export default MyApp
