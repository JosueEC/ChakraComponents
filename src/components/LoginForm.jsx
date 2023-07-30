import { Stack, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { bgText } from '../utils/ChakraTheme/ColorPalette'
import CenteredContainer from '../singleComponents/ContentContainers/CenteredContainer'
import VerticalContainer from '../singleComponents/ContentContainers/VerticalContainer'
import FormContainer from '../singleComponents/ContentContainers/FormContainer'
import GradientText from '../singleComponents/GradientText'
import EmailField from '../singleComponents/Inputs/EmailField'
import PasswordFiled from '../singleComponents/Inputs/PasswordField'
import SubmitButton from '../singleComponents/Buttons/SubmitButton'

export default function LoginForm () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  function customSubmit (data) {
    console.info(data)
  }

  return (
    <CenteredContainer>
      <VerticalContainer>
        <Stack
          align='center'
          rounded='lg'
        >
          <GradientText text='Hola de nuevo!' />
        </Stack>
        <form onSubmit={handleSubmit(customSubmit)}>
          <FormContainer>
            <EmailField
              register={register}
              errors={errors}
            />
            <PasswordFiled
              register={register}
              errors={errors}
            />
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
