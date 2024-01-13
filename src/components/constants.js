import styled from "styled-components";
import PILOT from "../images/past/2023.svg";
import SYN from "../images/past/2022.svg";
import DEC from "../images/past/2021.svg";
import VPRE from "../images/past/2020.svg";
import PAR from "../images/past/2019.svg";
import COO from "../images/past/2018.svg";
import GRO from "../images/past/2017.svg";
import CRES from "../images/past/2016.svg";
import PROB from "../images/past/2015.svg";
import DAR from "../images/past/2014.svg";
import favicon from "../../static/icons/icon-512x512.png";

export const Favicon = favicon;

export const links = [
  { link: "/", name: "home" },
  { link: "/about", name: "about" },
  { link: "/team", name: "our team" },
  { link: "/sponsors", name: "sponsors" },
  { link: "/join", name: "join us" },
  { link: "/contact", name: "contact us" },
];

export const Padding = styled.div`
  padding: 5px 15vw;
  @media only screen and (max-width: 600px) {
    padding: 10vw;
  }
`;

export const Background = styled.div`
  background-repeat: no-repeat;
  min-height: fit-content;
  background-size: cover;

  @media only screen and (max-width: 600px) {
    background-size: contain;
  }
`;

export const TopPadding = "8vw";

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Projects = [
  {
    svg: PILOT,
    title: "2023: PILOT",
    description:
      "The 2023 team developed a modular intein-based cell-free protein synthesis (CFPS) platform that uses a strain of Vibrio natriegens to improve protein production/purification efficiency and energy usage.",
    achievements: "Silver Medal",
  },
  {
    svg: SYN,
    title: "2022: Synaestivum",
    description:
      "The 2022 team engineered a strain of heat-resistant wheat to tackle global increases in temperature. A proof of concept protoplast system demonstrated the successful integration of our genes of interest.",
    achievements: "Gold Medal",
  },
  {
    svg: DEC,
    title: "2021: DetecTME",
    description:
      "The 2021 team engineered a non-pathogenic, tumour-colonizing Salmonella strain to report anti-tumour immune activity within the tumour microenviornment. The expression of a reporter molecule would be recovered from the patient’s urine.",
    achievements: "Nominated for Best Diagnostics Project, Gold Medal",
  },
  {
    svg: VPRE,
    title: "2020: VPRE",
    description:
      "The 2020 team built a machine learning pipeline to predict the evolution of SARS-CoV-2 to inform vaccine target selection for COVID-19.",
    achievements:
      "Plenary speech at Harvard’s National Collegiate Research Conference and Stanford Research",
  },
  {
    svg: PAR,
    title: "2019: Paralyte-STX",
    description:
      "The 2019 team built a transcription-based biosensor to detect levels of saxitoxin, a toxin responsible for paralytic shellfish poisoning in humans. The resulting high-throughput screening would be used as an on-site device for detection of the toxin in bodies of water.",
    achievements: "",
  },
  {
    svg: COO,
    title: "2018: COOptimize",
    description:
      "The 2018 team used bacterial co-cultures to produce Naringenin and Kaempferol, biochemicals with anti-cancer properties. Distributing biosynthesis between two strains would both lighten the metabolic load and maximize energetic efficiency of the cell.",
    achievements: "Bronze Medal",
  },
  {
    svg: GRO,
    title: "2017: aGROW",
    description:
      "The 2017 team used CRISPR/Cas9 to remove the gene responsible for plant death and agricultural loss in Agrobacteria tumefaciens. Their transgenic bacteria would conjugate with A. tumefaciens, rendering it harmless and either preventing or correcting damage caused by it.",
    achievements:
      "Nominated for Best Environment Project, Nominated for Best Model, Silver Medal",
  },
  {
    svg: CRES,
    title: "2016: Crescentium",
    description:
      "Plant biomass has potential as a renewable energy source, but the metabolic strain of its degradation by a single strain is too large to accomplish this. The 2016 team developed a microbial community that would both degrade and valorize the biomass.",
    achievements: "Nominated for Best Manufacturing Project, Gold Medal",
  },
  {
    svg: PROB,
    title: "2015: Probeeotics",
    description:
      "Honeybee Colony Collapse Disorder destroys whole bee colonies, where neonicotinoid pesticides poison plat-feeders like bees. The 2015 team engineered honeybee intestinal bacteria to degrade imidacloprid, a widely-used neonicotinoid.",
    achievements:
      "Nominated for Best Environmental Project,Nominated for Best Poster, Gold Medal",
  },
  {
    svg: DAR,
    title: "2014: Darwin’s Metals",
    description:
      "Mineral separation in copper mining is in increasing demand but uses chemically taxing measures. The 2014 iGEM team used octapeptides in bacteria to selectively bind chalocopyrite, a copper mineral that separates it from the rest of the minerals.",
    achievements: "Gold Medal",
  },
];

export const Majors = [
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

export const FAQs = [
  {
    q: "Do you accept students from any year level?",
    a: "Yes! Some of our most valued members have been on the team since their first year. As long as you are an undergraduate student eager to learn and work well in a team context for a common goal, come join us! ",
  },
  {
    q: "Do I need to have any particular experience to be considered? ",
    a: "Not necessarily. If you wish to join the wet lab sub-team, it is ideal if you have previous wet lab experience from courses, volunteering, work, or other extracurriculars. However, even in this case, we have students whose first wet lab experience is through iGEM!",
  },
  {
    q: "What are the most important qualities when you look at when a candidate applies?",
    a: "Willingness to learn and a genuine enthusiasm! Since synthetic biology is a niche subject, we do not expect extensive knowledge of the field. BUT we do require you to complement this with an eagerness to learn the necessary concepts and skills.",
  },
];
export const Members = [
  {
    header: "Directors",
    people: [
      {
        name: "Chaehyeon Lee",
        photo: "",
        position: "Co-Director",
        major: "Biomedical Engineering",
      },
      {
        name: "Narjis Alhusseini",
        photo: "",
        position: "Co-Director",
        major: "Microbiology and Immunology",
      },
    ],
  },
  {
    header: "Leads",
    people: [
      {
        name: "Stella Kauryzhka",
        photo: "",
        position: "Wet Lab",
        major: "Biomedical Engineering",
      },
      {
        name: "Tina Wang",
        photo: "",
        position: "Wet Lab",
        major: "Microbiology and Immunology",
      },
      {
        name: "Lucy Hao",
        photo: "",
        position: "Dry Lab and Wiki",
        major: "Computer Science and Chemistry",
      },
      {
        name: "Piyush Awasthi",
        photo: "",
        position: "Dry Lab",
        major: "Biomedical Engineering",
      },
      {
        name: "Harrison Kim",
        photo: "",
        position: "Human Practices",
        major: "Biomedical Engineering",
      },
      {
        name: "Yejin Lhee",
        photo: "",
        position: "Design and External",
        major: "Biochemistry",
      },
      {
        name: "Achint Lail",
        photo: "",
        position: "Finance",
        major: "Honours in Chemistry and Biochemistry",
      },
    ],
  },
  {
    header: "Wet Lab",
    people: [
      {
        name: "Achint Lail",
        photo: "",
        major: "Honours in Chemistry and Biochemistry",
      },
      {
        name: "Ada Jiang",
        photo: "",
        major: "Microbiology and Immunology",
      },
      {
        name: "Burak Ozkan",
        photo: "",
        major: "Microbiology and Immunology",
      },
      {
        name: "Chloe King",
        photo: "",
        major: "Applied Biology",
      },
      {
        name: "Daniel Hinatsu",
        photo: "",
        major: "Biomedical Engineering",
      },
      {
        name: "Diego Perez Hidalgo",
        photo: "",
        major: "Honours Biochemistry",
      },
      {
        name: "Pattarin Blanchard",
        photo: "",
        major: "Chemical and Biological Engineering",
      },
      {
        name: "Qinru Kong",
        photo: "",
        major: "Microbiology and Immunology",
      },
      {
        name: "Ran Tao",
        photo: "",
        major: "Microbiology and Immunology",
      },
    ],
  },
  {
    header: "Dry Lab",
    people: [
      {
        name: "Matthias Wong",
        photo: "",
        major: "Biomedical Engineering",
      },
      {
        name: "Riya Alluri",
        photo: "",
        major: "Biology and Computer Science",
      },
      {
        name: "Samuel Salitra",
        photo: "",
        major: "Microbiology and Immunology and Computer Science",
      },
      {
        name: "Sebastian Hyland",
        photo: "",
        major: "Applied Science",
      },
    ],
  },
  {
    header: "Human Practices",
    people: [
      {
        name: "Charlotte Lee",
        photo: "",
        major: "Microbiology and Immunology",
      },
      {
        name: "Claire Pinckney",
        photo: "",
        major: "Science",
      },
      {
        name: "Jessica Xin",
        photo: "",
        major: "Biomedical Engineering",
      },
      {
        name: "Yejin Lhee",
        photo: "",
        major: "Biochemistry",
      },
    ],
  },
  {
    header: "Wiki",
    people: [
      {
        name: "Deigo Perez Hidalgo",
        photo: "",
        major: "Honours Biochemistry",
      },
    ],
  },
  {
    header: "Design",
    people: [
      {
        name: "Aoniya Colynn",
        photo: "",
        major: "Science",
      },
      {
        name: "Karen Lin",
        photo: "",
        major: "Visual Arts",
      },
    ],
  },
  {
    header: "Advisors",
    people: [
      {
        name: "Laura Gonzalez Campos",
        photo: "",
        major: "Graduate Advisor",
      },
      {
        name: "Madina Kagieva",
        photo: "",
        major: "Graduate Advisor",
      },
      {
        name: "Rodrigo Vallejos",
        photo: "",
        major: "Graduate Advisor",
      },
      {
        name: "Anjali Parthasarathy",
        photo: "",
        major: "Undergraduate Advisor",
      },
      {
        name: "Brenda Ma",
        photo: "",
        major: "Undergraduate Advisor",
      },
      {
        name: "Edward Li",
        photo: "",
        major: "Undergraduate Advisor",
      },
      {
        name: "Parneet Sekhon",
        photo: "",
        major: "Undergraduate Advisor",
      },
      {
        name: "Umar Ali",
        photo: "",
        major: "Undergraduate Advisor",
      },
    ],
  },
  {
    header: "Principal Investigator",
    people: [
      {
        name: "Dr. Steven Hallam",
        photo: "",
        major: "Faculty Advisor",
      },
      {
        name: "Dr. David Oliver",
        photo: "",
        major: "Faculty Advisor",
      },
    ],
  },
];
