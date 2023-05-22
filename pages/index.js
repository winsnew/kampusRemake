import { Box, Container } from '@chakra-ui/react'
import Layout from '../components/main/layouts'
import Carousel from '../components/carousel'
import MainDash from '../components/mainDash'
import Section from '../components/section'

const images1 = [
  '/assets/udinus.jpeg',
  '/assets/udinus2.jpeg',
  '/assets/udinus3.png'
]

const Page = () => {
  return (
    <Layout>
      <Container
        maxW="100%"
        flexDirection="column"
        >
        <Box >
          <Carousel images={images1} />
          <Section>
            <MainDash />
          </Section>
        </Box>
      </Container>
    </Layout>
  )
}

export default Page
