import { Provider } from "react-redux";
import { store } from "./redux/store";

import Counter from "./views/Counter";
import Navbar from "./components/Navbar";

import I18nProvider from "./components/system/I18nProvider";

import "./i18n";
function App() {
  return (
    <>
      <Provider store={store}>
        <I18nProvider />
        <Navbar />
        <Counter />
      </Provider>
    </>
  );
}

export default App;
