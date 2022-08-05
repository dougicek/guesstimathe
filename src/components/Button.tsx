import React from 'react'
import { BUTTON_TYPES } from "../types"

type Props = {
    text: string;
    callback: Function;
    type?: string;
}

export default function Button(props: Props) {
  return (
    <button className={props.type === BUTTON_TYPES.signButton ? 'sign-button' : ''} onClick={e => props.callback()}>{props.text}</button>
  )
}