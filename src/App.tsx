import {
  provideHeadless,
  SearchHeadlessProvider,
  HeadlessConfig,
} from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
} from "@yext/search-ui-react";

import "./App.css";

function App() {
  const config: HeadlessConfig = {
    apiKey: "48209b3c99cd6f01ed0dae44efe54a15",
    experienceKey: "toyota-car-manual-search",
    locale: "ja",
    verticalKey: "files",
  };

  const searcher = provideHeadless(config);
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div>
        <SearchBar />
        <VerticalResults CardComponent={StandardCard} />
      </div>
    </SearchHeadlessProvider>
  );
}

export default App;
