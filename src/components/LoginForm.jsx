import { Box, Stack, Text } from '@chakra-ui/react'
import CenteredContainer from '../singleComponents/ContentContainers/CenteredContainer'
import FormContainer from '../singleComponents/ContentContainers/FormContainer'
import GradientText from '../singleComponents/GradientText'

export default function LoginForm () {
  const bgText = 'gray.300'
  const bgElement = 'gray.800'

  return (
    <CenteredContainer>
      <FormContainer>
        <Stack
          align='center'
          rounded='lg'
        >
          <GradientText
            text='Hola de nuevo!'
          />
          <Text
            fontSize='lg'
            color={bgText}
          >
            Ingresa para disfrutar de todos nuestros servicios
          </Text>
        </Stack>
        <form>
          <Box
            rounded='lg'
            bg={bgElement}
            shadow='lg'
            p={8}
          >
            <h2>Prueba de contenido</h2>
          </Box>
        </form>
      </FormContainer>
    </CenteredContainer>
  )
}
