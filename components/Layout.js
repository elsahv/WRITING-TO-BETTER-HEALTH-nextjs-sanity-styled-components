import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global.js";
import Footer from "./Footer";
import Header from "./Header";

const theme = {
  mobile: "1024",
};
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
}
