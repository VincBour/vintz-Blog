import "../styles/index.css";
import type { AppProps } from "next/app";
import "../components/layout/Layout.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
