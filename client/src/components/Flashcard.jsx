const Flashcard = ({ loading, response }) => {

  return (
    <div className="w-full max-w-xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-2xl border border-gray-200 transition-all duration-300 ease-in-out">

      {loading ? (
        <p className="text-gray-500 animate-pulse">Loading...</p>
      ) : (
        <pre className="whitespace-pre-wrap text-gray-800 font-mono text-sm">{response}</pre>
      )}
    </div>
  );
};

export default Flashcard;
