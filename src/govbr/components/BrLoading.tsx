import React from 'react'
import { Box, Center, HStack, Spinner, Text, VStack } from '@chakra-ui/react'

type BrLoadingType = {
  label?: string
  medium?: boolean
  textPosition?: 'top' | 'bottom' | 'left' | 'right'
}

export const BrLoading = ({
  label = 'Carregando...',
  medium = true,
  textPosition = 'bottom',
}: BrLoadingType) => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="full"
      height="full"
      backgroundColor="rgba(0, 0, 0, 0.7)"
      zIndex="modal"
    >
      <Center height="80vh">
        {textPosition === 'bottom' && (
          <VStack spacing={2}>
            <Spinner size={medium ? 'xl' : 'md'} color="white" />
            <Text
              color="white"
              fontSize="xl"
              mt={2}
              textTransform={'capitalize'}
            >
              {label}
            </Text>
          </VStack>
        )}
        {textPosition === 'top' && (
          <VStack spacing={2}>
            <Text
              mb={2}
              color="white"
              fontSize="xl"
              textTransform={'capitalize'}
            >
              {label}
            </Text>
            <Spinner size={medium ? 'xl' : 'md'} color="white" />
          </VStack>
        )}
        {textPosition === 'left' && (
          <HStack spacing={2}>
            <Text
              mr={5}
              mt={4}
              color="white"
              fontSize="xl"
              ml="4"
              textTransform={'capitalize'}
            >
              {label}
            </Text>
            <Spinner size={medium ? 'xl' : 'md'} color="white" />
          </HStack>
        )}
        {textPosition === 'right' && (
          <HStack spacing={2}>
            <Spinner size={medium ? 'xl' : 'md'} color="white" />
            <Text
              mt={4}
              ml={5}
              color="white"
              fontSize="xl"
              textTransform={'capitalize'}
            >
              {label}
            </Text>
          </HStack>
        )}
      </Center>
    </Box>
  )
}
