import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Root() {
  return (
    <div>
      <Header />
      <div>
        <h1>UBC iGEM</h1>
        <p>building a better future through synthetic biology</p>
      </div>
      <div>
        <h2>International Genetically Engineered Machine (iGEM)</h2>
        <p>
          is an MIT-based non profit organization that hosts the annual iGEM
          synthetic biology competition. They are founded with the goal of
          advancing the field of synthetic biology through education,
          competition, and fostering a collaborative community. With over 5,000
          annual participants, iGEM has promoted the application of genetic
          cellular engineering to various scientific fields.
        </p>
        <Button text={"Learn More"} link={"https://igem.org/"} />
      </div>
      <div>
        <h2>Our Team</h2>
        <p>
          the UBC iGEM team is an undergraduate student design team that has
          competed in this competition since 2009. Our current team consists of
          highly motivated undergraduate students along with graduate and
          faculty advisors that span various life sciences and engineering
          fields.
        </p>
        <Button text={"Learn More"} link={"/team"} />
      </div>
      <Footer />
    </div>
  );
}
