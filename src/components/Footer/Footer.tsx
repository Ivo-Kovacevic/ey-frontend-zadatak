import H3 from "../H3";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1D] text-white">
      <section className="mx-auto py-16 max-w-screen-xl flex flex-wrap justify-between">
        <div className="flex flex-col items-center">
          <H3>PET-FACTS.COM</H3>
          <a href="#">About us</a>
          <a href="#">Careers</a>
          <a href="#">FAQ</a>
        </div>
        <div className="flex flex-col items-center">
          <H3>OUT BRANDS</H3>
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

        <div className="flex-grow my-8">
          Copyright is a legal right, existing in many countries, that grants the creator of an original work exclusive
          rights to determine whether, and under what conditions, this original work may be used by others.
        </div>
      </section>
    </footer>
  );
}
