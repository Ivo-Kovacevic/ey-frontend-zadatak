import Content from "./components/content/Content";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="overflow- text-neutral-800">
        <Content />
        <Gallery />
        <Form />
      </main>

      <footer className="bg-neutral-900 text-white">
        <Footer />
      </footer>

      <CookieBanner />
    </>
  );
}
