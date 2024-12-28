import {type ComponentPropsWithoutRef } from "react"

type InputPropTypes = {
    label: string,
    id: string,

} & ComponentPropsWithoutRef<'input'>


function Input({label, id, ...props}: InputPropTypes) {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input name={id} {...props} />
    </p>
  )
}

export default Input