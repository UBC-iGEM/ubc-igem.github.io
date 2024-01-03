import Footer from "../components/footer";
import Header from "../components/header";

export default function Join() {
  const majors = [
    {
      major: "Science students",
      description:
        "Do you want to get some research experience? Join our wet lab sub team where you’ll undergo the whole research lifecycle; you’ll experience all of it from ideating to executing experiments and delivering a product!",
    },
    {
      major: "Engineering students",
      description:
        "Hardware and modelling is a large part of the criteria for an iGEM project; this allows for you to learn how to produce and integrate machines to a biological system.",
    },
    {
      major: "Computer Science students",
      description:
        "iGEM is not restricted to the life sciences! Want to increase your experience in bioinformatics? Principles of computational design are applied to the iGEM experience through modelling and software research projects. ",
    },
    {
      major: "Commerce students",
      description:
        "Creating a secure network of professionals is key for the essential collaboration between iGEM teams. You can expand your network as well as practice some finance skills by managing the research budget. time to put your marketing and finance skills to good use in the biotech industry!",
    },
    {
      major: "Humanities and Arts students",
      description:
        "Issues of science and society are a big part of our projects through human practices efforts that focus on education and awareness. Help us organize education and promotional events and lend an analytical eye to how our project impacts the world we live in.",
    },
    {
      major: "Graduate Students",
      description:
        "Do you want to become an advisor for an undergraduate competition team? We are always on the lookout for graduate students from various backgrounds to help us in our endeavors.",
    },
  ];

  const faqs = [
    {
      q: "Do you accept students from any year level?",
      a: "yes! some of our most valued members have been on the team since their first year. as long as you are an undergraduate student eager to learn and work well in a team context for a common goal, come join us! ",
    },
    {
      q: "Do I need to have any particular experience to be considered? ",
      a: "not necessarily. if you wish to join the wet lab sub-team, it is ideal if you have previous wet lab experience from courses, volunteering, work, or other extracurriculars. however, even in this case, we have students whose first wet lab experience is through iGEM!",
    },
    {
      q: "What are the most important qualities when you look at when a candidate applies?",
      a: "willingness to learn and a genuine enthusiasm! since synthetic biology is a niche subject, we do not expect extensive knowledge of the field. BUT we do require you to complement this with an eagerness to learn the necessary concepts and skills.",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        <h1>Join the Team</h1>
        <p>Want to meet like-minded students to design something amazing?</p>
        <h2>Our applications are currently closed.</h2>
        <p>
          Consider joining us for our next competition season. Come visit our
          website in the fall or follow us on Instagram for updates!
        </p>
      </div>
      <div>
        <h2>Is iGEM for you?</h2>
        {majors.map((info) => (
          <>
            <h3>{info.major}</h3>
            <p>{info.description}</p>
          </>
        ))}
      </div>
      <div>
        <h2>FAQ</h2>
        {faqs.map((qa) => (
          <>
            <h3>{qa.q}</h3>
            <p>{qa.a}</p>
          </>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
