import {
  provideHeadless,
  SearchHeadlessProvider,
  HeadlessConfig,
  Environment,
} from "@yext/search-headless-react";
import "./App.css";
import VectorSearch from "./components/VectorSearch";

function App() {
  const config: HeadlessConfig = {
    apiKey: "48209b3c99cd6f01ed0dae44efe54a15",
    experienceKey: "toyota-car-manual-search",
    locale: "ja",
    verticalKey: "files",
    environment: Environment.SANDBOX,
  };
  // const config2: HeadlessConfig = {
  //   apiKey: "01db1d1e5ebbaa7ea2e6807ad2196ab3",
  //   experienceKey: "yext-help-hitchhikers",
  //   experienceVersion: "STAGING",
  //   locale: "en",
  // };

  const searcher = provideHeadless(config);
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <VectorSearch />
    </SearchHeadlessProvider>
  );
}

export default App;
