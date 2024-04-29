import { ComponentProps } from "react";

interface iconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: iconButtonProps) {
  return (
    <button {...props} className="bg-black/20 border border-white/10 rounded-md p-1.5"></button>
  )
}