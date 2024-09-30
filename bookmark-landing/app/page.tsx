import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Extensions from "./components/Extensions/Extensions";
import Faq from "./components/Faq/Faq";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Extensions />
        <Faq />
        <Form />
      </main>
      <Footer />
    </>
  );
}
