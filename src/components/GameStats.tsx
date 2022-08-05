import React from 'react'

type Props = {
    currentRound: number;
    roundCount: number;
    errorCount: number;
    score: number;
}

export default function GameStats(props: Props) {
  return (
    <div className="game-stats">
        <div className="game-stats-item">
            <div>Kolo: </div>
            <div>{`${props.currentRound}/${props.roundCount}`}</div>
        </div>
        <div className="game-stats-item">
            <div>Počet chyb: </div>
            <div>{props.errorCount}</div>
        </div>
        <div className="game-stats-item">
            <div>Skóre: </div>
            <div>{props.score}</div>
        </div>
    </div>
  )
}