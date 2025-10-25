import { useState } from "react";

const quizData = [
  {
    question: "Which country is famous for sushi?",
    options: ["Italy", "Japan", "India", "France"],
    answer: "Japan",
  },
  {
    question: "What is the main ingredient of guacamole?",
    options: ["Avocado", "Tomato", "Potato", "Lettuce"],
    answer: "Avocado",
  },
  {
    question: "Which of these is a dessert?",
    options: ["Burger", "Cake", "Soup", "Pizza"],
    answer: "Cake",
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizData[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < quizData.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrent(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-50 to-yellow-200 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-orange-600">🍽 Food Quiz</h1>

        {!showResult ? (
          <>
            <h2 className="text-xl font-semibold mb-4">
              {quizData[current].question}
            </h2>
            <div className="space-y-3">
              {quizData[current].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="block w-full py-2 px-4 bg-orange-400 hover:bg-orange-500 rounded-lg text-black font-medium transition"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-6 text-gray-500">
              Question {current + 1} of {quizData.length}
            </p>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              🎉 You scored {score} out of {quizData.length}!
            </h2>
            <button
              onClick={resetQuiz}
              className="mt-4 px-6 py-2 bg-yellow-500 rounded-full text-white font-semibold hover:bg-yellow-600 transition"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
