'use client'
import { extendTheme } from '@chakra-ui/react'

export const brChakraUiTheme = extendTheme({
  components: {
    Tooltip: {
      baseStyle: {
        bg: '#0C326F',
        color: '#f7fafc',
        padding: '1',
        borderRadius: '5',
        border: '1px solid #154C21',
      },
    },
  },
})
