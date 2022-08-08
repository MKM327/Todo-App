import "../styles/styles.css";
import "../styles/menu.css";
import "../styles/details.css";
import "../styles/toolbar.css";
import "../styles/notePage.css";
import { SearchProvider } from "../Contexts/SearchContext";
import { TodoProvider } from "../Contexts/TodoContext";
import { MenuProvider } from "../Contexts/MenuContext";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


export default function MyApp({ Component, pageProps }) {

  return (
    <MenuProvider>
      <SearchProvider>
        <TodoProvider>
          <Component {...pageProps} />
        </TodoProvider>
      </SearchProvider>
    </MenuProvider>
  );
}
