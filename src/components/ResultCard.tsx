const ResultCard = ({ result }: any) => {
  return (
    <div
      key={result.data.uid}
      className="mb-4 justify-between rounded-lg border bg-zinc-100 p-4 text-stone-900 shadow-sm flex flex-col gap-4"
    >
      <div>Segment: {result?.segment?.text}</div>
      <div className="text-stone-400">
        Entity ID:{" "}
        <a href={result.data.landingPageUrl} className="text-blue-400">
          {result.data.id}
        </a>
      </div>
      <div className="italic self-end">Score: {result?.segment?.score}</div>
    </div>
  );
};

export default ResultCard;
