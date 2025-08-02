import React from "react";

const QuestionInput = ({ input, setInput }) => {
  return (
    <div className="w-full max-w-xl">
      <textarea
        rows="4"
        placeholder="Paste your DSA question or title here..."
        className="w-full p-3 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default QuestionInput;
