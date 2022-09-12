import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layouts/Main'
import '../styles/style.css'

const Website = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Website
