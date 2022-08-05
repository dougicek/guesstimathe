import React from 'react'
import { NumberToGuess, SIGNS, BUTTON_TYPES } from "../types"
import Button from "./Button"

type Props = {
    firstNumber: NumberToGuess | null,
    secondNumber: NumberToGuess | null,
    takeGuess: Function
}



export default function Game(props: Props) {
    return (
        <div className="game-container">
            <div className="game-number">{props.firstNumber ? props.firstNumber.formula : ''}</div>
            <div className="sign-buttons">
                <div>
                    <Button text="<" callback={() => {props.takeGuess(SIGNS.lessThan)}} type={BUTTON_TYPES.signButton} />
                </div>
                <div>
                    <Button text="=" callback={() => {props.takeGuess(SIGNS.equals)}}type={BUTTON_TYPES.signButton} />
                </div>
                <div>
                    <Button text=">" callback={() => {props.takeGuess(SIGNS.greaterThan)}} type={BUTTON_TYPES.signButton} />
                </div>
            </div>
            <div className="game-number">{props.secondNumber ? props.secondNumber.formula : ''}</div>
        </div>
    )
}