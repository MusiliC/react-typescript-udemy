import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    el: 'button'
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

function Button(props: ButtonProps | AnchorProps) {


    if(props.el === "anchor")

  return (
    <a {...props}>Link</a>
  )

  return <button {...props} ></button>
}

export default Button