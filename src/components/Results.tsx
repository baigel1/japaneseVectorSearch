import ResultCard from "./ResultCard";

const Results = ({ results }: any) => {
  return (
    <section className="flex flex-col gap-4">
      {results.map((result: any, i: number) => {
        return (
          <ResultCard
            key={`${result.data.$key.primary_key}-${i}`}
            result={result}
          />
        );
      })}
    </section>
  );
};

export default Results;
