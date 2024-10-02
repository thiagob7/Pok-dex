import { RouterProvider } from "react-router-dom";

import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import { routes } from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={routes} />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
