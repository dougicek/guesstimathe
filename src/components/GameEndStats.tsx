import React from 'react'

type Props = {
    errorCount: number;
    score: number;
}

export default function GameEndStats(props: Props) {
  return (
    <div className="game-end-stats">
        <h2>Hra skončila</h2>
        <div className="">
            <div>
                Vaše skóre je {props.score}
            </div>
            <div>
                Počet chyb: {props.errorCount}
            </div>
        </div>
    </div>
  )
}