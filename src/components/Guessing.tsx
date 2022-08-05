import { useEffect, useState } from "react"
import Button from "./Button"
import GameStats from "./GameStats"
import Game from "./Game"
import GameEndStats from "./GameEndStats"
import { NumberToGuess, SIGNS } from "../types"


function Guessing() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [gameEnded, setGameEnded] = useState<boolean>(false)
    const [score, setScore] = useState<number>(0)
    const [errorCount, setErrorCount] = useState<number>(0)
    const [currentRound, setCurrentRound] = useState<number>(1)
    const roundCount = 5
    const [firstNumber, setFirstNumber] = useState<NumberToGuess | null>(null)
    const [secondNumber, setSecondNumber] = useState<NumberToGuess | null>(null)
    const [difficultyLevel, setDifficultyLevel] = useState<number>(1)
    const [guessedSign, setGuessedSign] = useState<SIGNS | null>(null)
    


    function startGame() {
        // console.log("start a game")
        setScore(0)
        setErrorCount(0)
        setCurrentRound(1)
        playRound()
        setIsPlaying(true)
        setGameEnded(false)
    }

    function playRound() {
        
        if (currentRound === roundCount ) {
            endGame() 
            return
        }
        generateNumbers()
    }

    function generateNumbers() {
        let first: number
        let firstModifier: number
        let firstValue: number
        let firstFormula: string 

        let second: number
        let secondModifier: number
        let secondValue: number
        let secondFormula: string

        switch (difficultyLevel) {
            case 1:
            default:
                first = Math.floor(Math.random() * 10)
                second = Math.floor(Math.random() * 10)

                setFirstNumber({
                    value: first,
                    formula: first.toString()
                })
                setSecondNumber({
                    value: second,
                    formula: second.toString()
                })
                break
            case 2:
                first = Math.floor(Math.random() * 100)
                firstModifier = Math.floor(Math.random() * 100)
                firstValue = first - firstModifier
                firstFormula = `${first} - ${firstModifier}`

                second = Math.floor(Math.random() * 100)
                secondModifier = Math.floor(Math.random() * 100)
                secondValue = second - secondModifier
                secondFormula = `${second} - ${secondModifier}`
                
                setFirstNumber({
                    value: firstValue,
                    formula: firstFormula.toString()
                })
                setSecondNumber({
                    value: second,
                    formula: secondFormula.toString()
                })
                break
        }

    }

    function takeGuess(guess: SIGNS) {
        // console.log(guess)
        setGuessedSign(guess)
        evaluateGuess(firstNumber, secondNumber, guess)
        if (currentRound < 5)  setCurrentRound(currentRound + 1)
    }

    function failRound() {
        setErrorCount(errorCount + 1)
        playRound()
    }


    function evaluateGuess(first: NumberToGuess | null, second: NumberToGuess | null, guess:SIGNS) {
        
        if (first === null || second === null) {
            return false
        }

        // console.log(first.value)
        // console.log(second.value)
        // console.log(guess)

        if ((first.value === second.value && guess === SIGNS.equals)
            || (first.value > second.value && guess === SIGNS.greaterThan)
            || (first.value < second.value && guess === SIGNS.lessThan)) {
            setScore(score + 10)
        } else {
            setErrorCount(errorCount + 1)
        }
        playRound()

    }

    function endGame() {
        setGameEnded(true)
        setIsPlaying(false)
    }

    return (
        <div className="main-container">
            <GameStats currentRound={currentRound} roundCount={roundCount} errorCount={errorCount} score={score} />
            <div className="difficulty">
                <label>Obtížnost</label>
                <input disabled={isPlaying} 
                    type="range" 
                    id="points" 
                    name="points" 
                    min="1" max="2"
                    value={difficultyLevel} 
                    onChange={e => {setDifficultyLevel(parseInt(e.target.value))}}/>
            </div>
            
            <Button text={isPlaying ? "Restartovat hru" : "Začít hru"} callback={startGame} />
            {gameEnded ? (
                <GameEndStats errorCount={errorCount} score={score} />
            ) : (
                <Game firstNumber={firstNumber} secondNumber={secondNumber} takeGuess={takeGuess} />
            )}
            
        </div>
    )
}



export default Guessing;