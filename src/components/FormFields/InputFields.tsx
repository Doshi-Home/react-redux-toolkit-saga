import React from 'react'
import { TextField } from '@material-ui/core'
import { Control, useController } from 'react-hook-form'

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  placeholder?: string
  control?: Control<any>
}
export const InputField: React.FC<InputFieldProps> = (props) => {
  const { control, label, name, placeholder, ...rest } = props

  const {
    field: { value, onChange, onBlur, ref },
    // fieldState: { invalid, error},
    // formState: { errors, isValid },
  } = useController({ name, control })

  return (
    <TextField
      fullWidth
      margin='normal'
      variant='outlined'
      placeholder={placeholder}
      value={value}
      label={label}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      // error={invalid}
      // helperText={error && error.message}
      inputProps={rest}
    />
  )
}
