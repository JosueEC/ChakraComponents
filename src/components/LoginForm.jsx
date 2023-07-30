import { Stack, Text } from '@chakra-ui/react'
import CenteredContainer from '../singleComponents/ContentContainers/CenteredContainer'
import VerticalContainer from '../singleComponents/ContentContainers/VerticalContainer'
import FormContainer from '../singleComponents/ContentContainers/FormContainer'
import GradientText from '../singleComponents/GradientText'
import EmailField from '../singleComponents/Inputs/EmailField'
import PasswordFiled from '../singleComponents/Inputs/PasswordField'
import SubmitButton from '../singleComponents/Buttons/SubmitButton'

export default function LoginForm () {
  const bgText = 'gray.300'

  return (
    <CenteredContainer>
      <VerticalContainer>
        <Stack
          align='center'
          rounded='lg'
        >
          <GradientText text='Hola de nuevo!' />
          <Text
            fontSize='lg'
            color={bgText}
          >
            Ingresa para disfrutar de todos nuestros servicios
          </Text>
        </Stack>
        <form>
          <FormContainer>
            <EmailField />
            <PasswordFiled />
            <Stack spacing={5}>
              <SubmitButton text='Ingresar' />
              <Text
                color={bgText}
                letterSpacing='0.5px'
              >
                ¿Olvidaste tu contraseña? Click aqui
              </Text>
            </Stack>
          </FormContainer>
        </form>
      </VerticalContainer>
    </CenteredContainer>
  )
}
