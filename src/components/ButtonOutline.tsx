import React from 'react'

type Props = {
    text: string
}

const ButtonOutline = ({text}: Props) => {
  return (
    <div className="button-outline">
       {text}
    </div>
  )
}

export default ButtonOutline