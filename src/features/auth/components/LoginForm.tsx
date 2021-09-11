import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, CircularProgress } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { InputField } from 'components/FormFields/InputFields'
import { LoginPayload } from 'models'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { authActions } from '../authSlice'

interface LoginFormProps {
  initialValue: LoginPayload
  onSubmit: (formValue: LoginPayload) => void
}

const passwordRegExp: RegExp =
  /^(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[#?!@$%^/&*_()~`:;'"\\\[+={}\]\/>\.\<,|-]){2}).{8,}$/

const schema = yup.object().shape({
  email: yup.string().email('Adresse e-mail invalide').required('Obligatoire'),
  password: yup.string().required('Obligatoire'),
  // .matches(/^\S*$/, "Les mots de passe n'acceptent pas l'espace")
  // .matches(
  //   passwordRegExp,
  //   'Le mot de passe doit contenir au moins 8 caractères, dont 2 chiffres, 2 lettres normales, 2 lettres majuscules, 2 caractères spéciaux.'
  // ),
})

export const LoginForm: React.FC<LoginFormProps> = ({
  initialValue,
  onSubmit,
}) => {
  const dispatch = useAppDispatch()

  // const { logging } = useAppSelector((state) => state.auth)
  const [isLoading, setIsLoading] = React.useState(false)

  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  })

  const handleFormSubmit = (formValues: LoginPayload) => {
    // dispatch(authActions.hello())
    // console.log(formValues)
    onSubmit(formValues)
    setIsLoading(true)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField name="email" label="Email" control={control} />
      <InputField
        name="password"
        type="password"
        label="Mot de passe"
        control={control}
      />
      <Box mt="4">
        <Button type="submit" variant="contained" color="primary">
          <div>
            {isLoading && <CircularProgress size={16} color="secondary" />}
            &nbsp; Connexion
          </div>
        </Button>
      </Box>
    </form>
  )
}
