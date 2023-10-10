import './game.css'
import { useState } from "react";

function Game() {
    const [number, setNumber] = useState(Math.floor(Math.random() * 2));
    const [guess, setGuess] = useState("");
    const [attempts, setAttempts] = useState(0);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (parseInt(guess) === number) {
            alert("Acertou!");
            setNumber(Math.floor(Math.random() * 2));
            setGuess("");
            setAttempts(0);
        } else {
            setAttempts(attempts + 1);
        }
    }

    return (
        <div className="game">
            <h1>Jogo de adivinhação</h1>
            <span>
                Tentativas: {attempts}
            </span>
            <input
                type="number"
                placeholder="Digite um número"
                value={guess}
                onChange={({target}) => setGuess(target.value)}
            />
            <button
                onClick={handleClick}>Adivinhar
            </button>
        </div>
    )
}

export default Game;
