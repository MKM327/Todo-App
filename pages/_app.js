import "../styles/styles.css";
import "../styles/menu.css";
import "../styles/details.css";
import "../styles/toolbar.css";
import "../styles/notePage.css";
import Toolbar from "../components/Toolbar/Toolbar";
import { SearchProvider } from "../Contexts/SearchContext";
import { TodoProvider } from "../Contexts/TodoContext";
export default function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </SearchProvider>
  );
}
