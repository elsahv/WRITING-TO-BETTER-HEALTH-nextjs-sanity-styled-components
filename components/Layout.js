import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global.js";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar.js";

const theme = {
  mobile: "1024",
};
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Sidebar />
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
}
