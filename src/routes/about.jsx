import Footer from "../components/footer";
import Header from "../components/header";

export default function About() {
  return (
    <div>
      <Header />
      <div>
        <h1>iGEM at UBC</h1>
        <p>
          we are an eager team of undergraduates, supported by multiple
          professors and graduate students who act as mentors.
        </p>
      </div>
      <div>
        <p>
          UBC iGEM strives to create a space for budding scientists to expand
          their skills in research, science communication, and teamwork. We work
          towards not only the goal of competing in the iGEM Jamboree, but also
          to promote interdisciplinary learning and introduce our community to
          synthetic biology and the impacts it will have on our near future.
        </p>
      </div>
      <div>
        <h2>The iGEM Jamboree</h2>
        <p>
          is an international synthetic biology competition where student teams
          build their own genetic circuits and express them in biological
          systems. At this competition, students present their work and get
          judged by a scientific jury to win the Grand Prize.
        </p>
      </div>
      <div>
        <h2>Our Initiatives</h2>
        <p>TODO</p>
      </div>
      <Footer />
    </div>
  );
}
