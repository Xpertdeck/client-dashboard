import Layout from "../src/Components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout className="text-3xl ">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
