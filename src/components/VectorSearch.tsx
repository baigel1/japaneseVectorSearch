import { useState, useEffect } from "react";
import { useSearchState } from "@yext/search-headless-react";
import { SearchBar } from "@yext/search-ui-react";
import Results from "./Results";

const VectorSearch = () => {
  const [results, setResults] = useState<Array<any>>([]);
  const query = useSearchState((state) => state.query.mostRecentSearch);

  useEffect(() => {
    if (query) {
      fetchResults(query);
    }
    async function fetchResults(query: string) {
      //experience key: toyota-car-manual-search
      //api key: 48209b3c99cd6f01ed0dae44efe54a15
      //vertical key: files
      //locale: ja
      //tip: for production accounts, change the domain to prod-cdn
      const queryString = `https://sbx-cdn.us.yextapis.com/v2/accounts/me/search/vertical/query?experienceKey=toyota-car-manual-search&api_key=48209b3c99cd6f01ed0dae44efe54a15&v=20240101&version=STAGING&locale=ja&input=${query}&verticalKey=files&retrieveFacets=true&skipSpellCheck=false&sessionTrackingEnabled=false&sortBys=%5B%5D&source=vector-testing`;

      const searchResponse = await fetch(queryString).then((response) =>
        response.json()
      );

      const resultsArray = searchResponse.response.results;
      setResults(resultsArray);
    }
  }, [query]);

  return (
    <div>
      <SearchBar />
      <Results results={results} />
    </div>
  );
};

export default VectorSearch;
