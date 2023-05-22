import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <title>N0T Siadin by N0T</title>
            </Head>
            <Navbar path={router.asPath}/>
            <Container maxW="100%" maxH="max-content" pt={20}>
                {children}
                <Footer/>
            </Container>
        </Box>
    )
}

export default Main