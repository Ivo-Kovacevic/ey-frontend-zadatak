import H3 from "../H3";

export default function Footer() {
  return (
    <section className="mx-auto flex max-w-screen-lg flex-col flex-wrap justify-between p-4 py-16 md:flex-row">
      <div className="flex flex-col items-center">
        <H3>PET-FACTS.COM</H3>
        <a href="#">About us</a>
        <a href="#">Careers</a>
        <a href="#">FAQ</a>
      </div>
      <div className="flex flex-col items-center">
        <H3>OUR BRANDS</H3>
        <a href="#">Supercoat</a>
        <a href="#">Fancy Feast</a>
        <a href="#">Pro Plan</a>
        <a href="#">Beyond</a>
      </div>
      <div className="flex flex-col items-center">
        <H3>CONTACT US</H3>
        <a href="#">Contact us</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>

      <div className="my-8 flex-grow p-4 text-center">
        Copyright is a legal right, existing in many countries, that grants the creator of an
        original work exclusive rights to determine whether, and under what conditions, this
        original work may be used by others.
      </div>
    </section>
  );
}
