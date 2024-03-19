'use client'
import { extendTheme } from '@chakra-ui/react'

export const brChakraUiTheme = extendTheme({
  components: {
    Tooltip: {
      baseStyle: {
        bg: '#0C326F',
        color: '#f7fafc',
        padding: '1 2 1 2',
        borderRadius: '7',
        shadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
})
