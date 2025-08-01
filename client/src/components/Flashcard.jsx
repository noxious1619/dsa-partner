import { useState } from "react";

const Flashcard = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [activeType, setActiveType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async (type) => {
    if (!question) return;

    setLoading(true);
    setActiveType(type);
    setResponse(""); // Clear previous response while loading

    try {
      const res = await fetch(`http://localhost:5000/api/ask/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: question }),
      });

      const data = await res.json();
      setResponse(data.response || "No response.");
    } catch (err) {
      setResponse("Something went wrong while fetching.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flashcard-wrapper">
      
      {activeType && (
        <div className="flashcard">
          <h3>{activeType.charAt(0).toUpperCase() + activeType.slice(1)}</h3>
          {loading ? <p>Loading...</p> : <pre>{response}</pre>}
        </div>
      )}
    </div>
  );
};

export default Flashcard;
