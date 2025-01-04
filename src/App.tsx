import Content from "./components/Content/Content";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <Header />

      <main className="">
        <Content />
        <Gallery />
      </main>

      <Footer />
    </>
  );
}
