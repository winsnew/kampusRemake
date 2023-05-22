import Fonts from '../components/font'
import Chakra from '../components/chakra'
import Layout from '../components/main/main'

const Website = ({Component, pageProps, router}) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts/>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </Chakra>
    )
}

export default Website