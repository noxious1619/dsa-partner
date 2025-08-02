import { useState } from "react";
import QuestionInput from "../components/QuestionInput";
import Flashcard from "../components/Flashcard"; 
import Navbar from "../components/Navbar";



const Home = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleClick = async (type) => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(`http://localhost:5000/api/ask/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      setResponse("⚠️ Something went wrong while fetching API.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen p-4 flex flex-col items-center bg-gray-100 dark:bg-gray-400 text-gray-900 dark:text-white">

      <Navbar />

      <QuestionInput input={input} setInput={setInput} />

      <div className="flex gap-4 mt-4">
        <button onClick={() => handleClick("explanation")} className="btn">
          📘 Explanation
        </button>
        <button onClick={() => handleClick("hint")} className="btn">
          💡 Hint
        </button>
        <button onClick={() => handleClick("answer")} className="btn">
          ✅ Answer
        </button>
      </div>

      <Flashcard
        loading={loading}
        response={response}
      />

    </div>
  );
};

export default Home;
