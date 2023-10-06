import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const cardFace = ["hearts", "diamonds", "clubs", "spades"];
const cardIndex = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

export default function TestNi() {
  const [cards, setCard] = useState(Array(4).fill(Array(13).fill(0)));
  const [counter, setCounter] = useState(0);
  const [halt, setHalt] = useState(true);
  const [playerScore, setPlayerScore] = useState([0, 0]);

  const cardRefs = {
    u1: [useRef(), useRef(), useRef()],
    u2: [useRef(), useRef(), useRef()],
  };

  const c1u1 = useRef();
  const c2u1 = useRef();
  const c3u1 = useRef();

  const c1u2 = useRef();
  const c2u2 = useRef();
  const c3u2 = useRef();

  const u1cs = useRef([]);
  const u2cs = useRef([]);

  useEffect(() => {
    if (halt) return;

    const x = Math.floor(Math.random() * 4);
    const y = Math.floor(Math.random() * 13);

    if (cards[x][y] !== 0) return;

    const tmp = cards.map((row) => [...row]);
    const ref = cardRefs[`u${(counter % 3) + 1}`][counter < 3 ? counter : 2];
    const playerCards = counter < 3 ? u1cs : u2cs;

    tmp[x][y] = 1;
    ref.current.src = `cards/${cardIndex[y]}_of_${cardFace[x]}.png`;
    playerCards.current.push(y + 1);

    if (counter === 5) {
      setCounter(0);
      setHalt(true);
      checkWin();
    } else {
      setCounter(counter + 1);
      setTimeout(() => setCard(tmp), 300);
    }
  }, [cards, halt]);

  function checkWin() {
    const u1 = u1cs.current
      .map((n) => (n === 1 ? 14 : n))
      .sort((a, b) => a - b);
    const u2 = u2cs.current
      .map((n) => (n === 1 ? 14 : n))
      .sort((a, b) => a - b);

    let p1 = 0,
      p2 = 0,
      p1_3 = 0,
      p2_3 = 0;

    if (u1[0] === u1[1]) {
      p1 = u1[0];
      p1_3 = u1[2];
    } else if (u1[1] === u1[2]) {
      p1 = u1[1];
      p1_3 = u1[0];
    }

    if (u2[0] === u2[1]) {
      p2 = u2[0];
      p2_3 = u2[2];
    } else if (u2[1] === u2[2]) {
      p2 = u2[1];
      p2_3 = u2[0];
    }

    if (p1 === 0 && p2 === 0) {
      const winner = determineWinner(u1[2], u2[2]);
      updateScores(winner);
    } else if (p1 === p2) {
      const winner = determineWinner(p1_3, p2_3);
      updateScores(winner);
    } else {
      updateScores(p1 > 0 ? 0 : 1);
    }
  }

  function determineWinner(card1, card2) {
    if (card1 > card2) return 0;
    if (card2 > card1) return 1;
    return -1; // Tie
  }

  function updateScores(winner) {
    if (winner === 0) {
      setPlayerScore([playerScore[0] + 1, playerScore[1]]);
    } else if (winner === 1) {
      setPlayerScore([playerScore[0], playerScore[1] + 1]);
    } else {
      alert("Tied!");
    }
  }

  const resetGame = () => {
    setPlayerScore([0, 0]);

    for (let player = 1; player <= 2; player++) {
      for (let card = 1; card <= 3; card++) {
        cardRefs[`u${player}`][card - 1].current.src = "cards/blank.png";
      }
    }

    u1cs.current = [];
    u2cs.current = [];
  };

  return (
    <div style={{ width: 810, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Three Cards</h1>
      <div
        style={{
          width: 400,
          height: 400,
          display: "inline-block",
          textAlign: "center",
          border: "solid 1px #333",
        }}
      >
        <br />
        <img
          ref={c1u1}
          style={{
            width: 120,
            display: "inline-block",
            border: "solid 1px #333",
          }}
          src="cards/blank.png"
        />
        <img
          ref={c2u1}
          style={{
            width: 120,
            display: "inline-block",
            border: "solid 1px #333",
          }}
          src="cards/blank.png"
        />
        <img
          ref={c3u1}
          style={{
            width: 120,
            display: "inline-block",
            border: "solid 1px #333",
          }}
          src="cards/blank.png"
        />
        <br />
        <h1>Player 1: {playerScore[0]}</h1>
      </div>
      <div
        style={{
          width: 400,
          height: 400,
          display: "inline-block",
          textAlign: "center",
          border: "solid 1px #333",
        }}
      >
        <br />
        <img
          ref={c1u2}
          style={{
            width: 120,
            display: "inline-block",
            border: "solid 1px #333",
          }}
          src="cards/blank.png"
        />
        <img
          ref={c2u2}
          style={{
            width: 120,
            display: "inline-block",
            border: "solid 1px #333",
          }}
        />
        <img
          ref={c3u2}
          style={{
            width: 120,
            display: "inline-block",
            border: "solid 1px #333",
          }}
        />
        <br />
        <h1>Player 2: {playerScore[1]}</h1>
      </div>
      <Button
        variant="contained"
        sx={{ margin: "1%", width: "98%" }}
        onClick={() => {
          setHalt(false);
        }}
      >
        Draw Cards
      </Button>
    </div>
  );
}
