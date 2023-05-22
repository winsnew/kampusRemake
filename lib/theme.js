import { extendTheme } from "@chakra-ui/react";
import {mode} from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
      body: {
        bg: mode('#f2f2f2', '#202023')(props)
      }
    })
  }

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderLineOffset: 6,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
          color: mode('#3d7aed', '#ff63c3')(props),
          textUnderlineOffset: 3
        })
      }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
  }

  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
  }
  

const theme = extendTheme({components, styles, fonts, config})
export default theme