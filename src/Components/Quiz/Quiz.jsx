import "./Quiz.css";
import happyEmoji from "../../utils/images/Partying-Emoji.gif";
import sadEmoji from "../../utils/images/99e08f5cb365504e66e870cf10377267.jpg";
import { questions } from "../../utils/constants";
import React from "react";

function Result({ correct, restart }) {
  return (
    <>
      <img className="result__img" src={correct >= 2 ? happyEmoji : sadEmoji} />
      <div className="result__right-answers">
        Вы набрали {correct} из {questions.length} правильных ответов!
      </div>
      <button className="result__restart" type="button" onClick={restart}>
        Попробовать снова
      </button>
    </>
  );
}

function Game({ question, onClickChoose, step }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="game__progress-line">
        <div className="game__current" style={{ width: `${percentage}%` }} />
      </div>
      <h1 className="game__question">{question.title}</h1>
      <ul className="game__list">
        {question.variants.map((item, index) => {
          return (
            <li
              className="game__item"
              key={item}
              onClick={() => onClickChoose(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Quiz() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const restart = () => {
    setStep(0);
    setCorrect(0);
  };

  const onClickChoose = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <section className="quiz">
      <div className="quiz__container">
        {step !== questions.length ? (
          <Game question={question} onClickChoose={onClickChoose} step={step} />
        ) : (
          <Result correct={correct} restart={restart}/>
        )}
      </div>
    </section>
  );
}

export default Quiz;
