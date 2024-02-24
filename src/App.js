import "./App.scss";
import React from "react";

const quiz = [
  {
    title: "Выберите язык программирование из этого списка",
    variants: ["html", "css", "mui", "js"],
    correct: 3,
  },
  {
    title: "Выберите технологию с помощью которой стилизируют страницу",
    variants: ["python", "css", "с#", "js"],
    correct: 1,
  },
  {
    title: "Париж это столица какой странны ?",
    variants: ["Украина", "Испания", "Франция", "Аргентина"],
    correct: 2,
  },
  {
    title: "какая сборная выграла чемпионат мира в 2022 году?",
    variants: ["Франция", "Португалия", "Аргентина", "Италия"],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {quiz.length}
      </h2>
      <a href="/">
        <button className="resultButton">Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ questions, onClickVariants, step }) {
  const pracentage = Math.round((step / quiz.length) * 100);

  console.log("prancentage", pracentage);
  return (
    <div className="containerGame">
      <div className="progress">
        <div
          style={{ width: `${pracentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h2>Выберите правильный ответ</h2>
      <h1>{questions.title}</h1>
      <ul>
        {questions.variants.map((item, index) => (
          <li key={item} onClick={() => onClickVariants(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const questions = quiz[step];
  const [correct, setCorrect] = React.useState(0);

  const onClickVariants = (index) => {
    console.log(step, index);
    setStep((step) => step + 1);

    if (index === questions.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="container">
      {step !== quiz.length ? (
        <Game
          questions={questions}
          onClickVariants={onClickVariants}
          step={step}
        />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
