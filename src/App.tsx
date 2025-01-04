import Content from "./components/content/Content";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Form from "./components/form/Form";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="overflow-hidden">
        <Content />
        <Gallery />
        <Form />
      </main>

      <footer className="bg-neutral-900 text-white">
        <Footer />
      </footer>
    </>
  );
}
