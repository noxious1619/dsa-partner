import { useState } from "react";

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
      setResponse("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">🧠 DSA Partner</h1>

      <textarea
        rows="4"
        placeholder="Paste your DSA question or title here..."
        className="w-full max-w-xl p-3 rounded border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

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

      <div className="mt-6 w-full max-w-xl">
        {loading ? (
          <p>Loading...</p>
        ) : response ? (
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            {response}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
