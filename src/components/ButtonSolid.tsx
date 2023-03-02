import React from 'react'

type Props = {
    text: string
}

const ButtonSolid = ({text}: Props) => {
  return (
    <div className="button-solid">
       {text}
    </div>
  )
}

export default ButtonSolid