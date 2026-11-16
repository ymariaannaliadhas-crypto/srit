import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// =====================================================
// PEOPLE DATA - TOTAL 39 MEMBERS
// =====================================================

const personDetails = {
  1: {
    bio: "CA Shri Rangan Thiyagarajan is a Chartered Accountant by profession and holds a bachelor’s degree in commerce from Madras University.Rangan Thiyagarajan has over 35 years of experience across a wide spectrum of finance functions. He headed finance for the Chemical Division of Ballarpur Industries Ltd (BILT). For 27 years, he served M/s.VST Tillers Tractors Limited, where he grew to become its Chief Financial Officer (CFO) and Director. Rangan Thiyagarajan played pivotal roles in financial transformations that the company undertook. He was instrumental in setting up new business ventures & alliances.Rangan Thiyagarajan is the Partner in charge of the Bengaluru branch of ABB & Associates, Chartered Accountants, Mumbai.",
  },
  2: {
    bio: "Madhu Nambiar holds a Ph.D. from Washington State University, USA. He is also a Certified Administrator from UK’s Chartered Institute of Administrative Management. Dr. Nambiar has over 37 years of experience in ICT. Prior to establishing SRIT, he served as the India Director & Country Head for the American MNC “AEI”, a recognized leader in the Logistics & SCM Industry. Dr. Nambiar lived and worked overseas for 18 years. During this period, he served International Agencies acquiring and executing businesses for American conglomerates such as Motorola & CSC, AEI & Fedex.  At SRIT, Dr. Nambiar is working towards consolidating and focusing on core products, working out the smart way for SRIT to evolve & enhance shareholder value, without sacrificing the key assets that SRIT will require in the long term. ",
  },
  3: {
    bio: "Prasaktha is a Graduate (Honours) in Economics, Mathematics & Statistics from MES, Bangalore University. She brings 22 years of prior work experience which includes work with Federal Express International in overseas markets. Prasaktha heads the Corporate Affairs, Corporate Governance and oversees all aspects of SRIT’s Human Resources Management, strategically aligning them with the organization’s goals to optimize employee performance & engagement and creating a positive work environment.",
  },
  4: {
    bio: "Martin has a bachelor’s and a master’s degree in engineering (Gold Medallist & Rank Holder respectively) from NIT-REC. Martin has been with SRIT for 24 years. He has a total of 32 years of experience. Prior to SRIT, Martin held responsible positions in SOBHA Ltd for 8 years. He grew from a Design Engineer at their French-managed Studio, to Program-managing multiple contracts, delivery, and production across international locations. At SRIT, Martin is responsible for ensuring that all business processes run smoothly, efficiently, and in alignment with the company's strategic goals. He is a strong leader with a deep understanding of software development, project management, and operational best practices..",
  },
  5: {
    bio: "Dr. Chandan Dash, Founder and CEO of Blossom Hospitals is a visionary healthcare entrepreneur and Orthopedic Surgeon. Dr. Dash brings a wealth of expertise in pioneering digital health initiatives and leveraging cutting-edge technology to transform patient care. At Blossom Group, he has been a strong proponent of integrating AI and IoT-driven tools for early chronic disease diagnostics and streamlining large-scale mobile health camps. Dr. Dash’s deep alignment with technological innovation and his hands-on experience in deploying advanced digital health infrastructure will be instrumental in driving SRIT India’s strategic mission to engineer next-generation digital healthcare solutions. Together, Blossom & SRIT has set out a mission to use tech-enabled healthcare so that last-mile coverage of health is ensured for the people of India",
  },
  6: {
    bio: "Col. Amit Oberoi is the Co-founder & CEO of Carnot Research Pvt Ltd and holds a PhD in NLP from IIT Delhi. He brings 25+ years of experience from the Indian Army, where he served as Senior Director and Commanding Officer, leading critical Satcom, cybersecurity, and resilient network projects including the Indian Army Satellite.At Carnot Research, he leads the development of secure, on-premise GenAI platforms with verifiable RAG, multimodal data ingestion, and multilingual chatbots for disaster management and public transport. He pioneered the concept of Quality of Emotional Experience (QoEE) for NLP at ITU Study Group 12.An alumnus of IIT Delhi, IIM Mumbai, and NDA, he is a 3-time recipient of the Army Commander's Commendation and achieved 200% revenue growth for Carnot in its first year.",
  },
  7: {
    bio: "Ravichandran R is from the Engineering stream and brings over a decade of experience across operations, business development, and leadership roles. Currently serving as the Business Head in a leading Chennai-based Software & ICT Company, he specializes in managing government tenders and urban development projects in the IT and software sector. He leads end-to-end tender processes, project execution, and strategic collaboration with government bodies and PSUs. Known for his strong communication, problem-solving, and team management skills, he consistently delivers high-impact results",
  },
  8: {
    bio: "With effect from 30 April 2025, Shri Suresh Menon is also a Public Independent Director (PID) in NSE International Exchange (NSE IX).  As PID of NSE IX, Suresh is also associated with several mandatory committees of NSE IX.   Suresh did his master’s degree in commerce. He is a Post-Graduate (PG) in Financial Management & PG in Systems & Applications. Suresh has been a Career Regulator in the field of Securities Market having worked for 30 years in Securities & Exchange Board(SEBI). He has addressed several important functions in SEBI dealing with Secondary Market supervision, operations and regulations viz. Registration and supervision of the initial set of stockbrokers, inspection and supervision of stock exchanges and depository.Suresh was involved in various market intermediary supervision, oversight and policy making. His responsibilities included supervision of stock exchanges such as the Bombay, Madras, Cochin, Bangalore, Coimbatore, Saurashtra Kutch & Ahmedabad stock exchanges. In his position as the CGM, Suresh headed the investigation Dept of SEBI & handled major investigation cases relating to market manipulation, insider trading, front-running, PFUTP & LODR violations, corporate governance-related violations. During his 5-year stint as the Regional Director of SEBI’s southern region office, he was responsible for overseeing the Securities Market operations in the Southern Region. Further, as a Quasi-Judicial officer of SEBI for about 7 years, Suresh passed more than 500 orders dealing with a variety of subjects involving Market Manipulation, Insider Trading & LODR Violations",
  },
  9: {
    bio: "Since April 1997, Karthick has been a Member of the Institute of Company Secretaries of India. A practicing Company Secretary since May 2002 and founder partner of JKS, Karthick specializes in:•Secretarial Audit(s)•Internal Audit(s)•Due Diligence and AdvisoryKarthick is a visiting faculty with the Institute of Company Secretaries of India and has covered topics on (i) Board effectiveness (ii) Independent Directors (iii) Board Committees and (iv) Board Report. He is also a faculty member of the Institute of Directors. A Honorary Editor of magazine “Corporate Law Adviser”, Karthick has co-authored ICSI Premier on Company Law and was also the Co-Chairman of the “Corporate Law Publication Committee”.",
  },
  10: {
    bio: "Ashok is the Founder CEO of STAG Software Private Limited and Co-founder of Pivotrics LLP. With over 35 years of experience in software engineering and quality assurance, Ashok is the creator of HyBIST, a hypothesis-driven testing approach that has redefined modern Software QA practices. He has earned his Bachelors in ECE from Anna University, MS in Software Engineering from the Illinois Institute of Technology in Chicago and a postgraduate diploma in Environmental Law from the premier NLSIU Bangalore.Ashok previously held Sr Managerial & Leadership roles at MNC’s such as VeriFone, Blue Star (HP) & Sunray Computers. He is known for setting up India’s first independent software testing group. He is an ISO Lead Auditor, trained CMM assessor, and former President of the STEP-IN Forum. Ashok is a passionate technologist, and a creative thinker.",
  },
  11: {
    bio: "Manesh has over 20 years of experience in corporate finance, taxation, and strategic planning. His core expertise is in the areas of financial strategy, budgeting, compliance, and investor relations.  He is responsible for the Company’s financial actions. This includes financial planning, analysis, and reporting. Manesh plays a key role in strategic financial decisions, such as budgeting, risk management, and capital allocation. He advises the CEO and board of directors on financial matters and contributes to the company’s overall strategic direction.",
  },
  12: {
    bio: "Nidhi serves as the Company Secretary and Compliance Officer.  She brings over 14 years of experience in legal compliance, corporate governance, and SEBI regulations. A qualified Company Secretary (ICSI), Nidhi is responsible for overseeing regulatory compliance, board administration, and stakeholder communication. Her leadership ensures timely disclosures and robust governance practices.",
  },
  13: {
    bio: "Dr. Anil Ramachandran is widely recognized as the “Medical Laser Man of India”. Anil is the Founder of AMT Group of Companies; a Company strategically aligned with SRIT. AMT is a market leader in medical laser and cutting-edge technologies for Cancer treatment. A Doctor Engineer & Harvard alumnus, Anil brings 32 years’ experience in biomed equipment, Microwave, IRE, Imaging devices etc.",
  },
  14: {
    bio: "Dr. Chandan Dash, Founder and CEO of Blossom Hospitals is a visionary healthcare entrepreneur and Orthopedic Surgeon. Dr. Dash brings a wealth of expertise in pioneering digital health initiatives and leveraging cutting-edge technology to transform patient care. At Blossom Group, he has been a strong proponent of integrating AI and IoT-driven tools for early chronic disease diagnostics and streamlining large-scale mobile health camps. Dr. Dash’s deep alignment with technological innovation and his hands-on experience in deploying advanced digital health infrastructure will be instrumental in driving SRIT India’s strategic mission to engineer next-generation digital healthcare solutions. Together, Blossom & SRIT has set out a mission to use tech-enabled healthcare so that last-mile coverage of health is ensured for the people of India.",
  },
  15: {
    bio: "Col. Amit Oberoi is the Co-founder & CEO of Carnot Research Pvt Ltd and holds a PhD in NLP from IIT Delhi. He brings 25+ years of experience from the Indian Army, where he served as Senior Director and Commanding Officer, leading critical Satcom, cybersecurity, and resilient network projects including the Indian Army Satellite.At Carnot Research, he leads the development of secure, on-premise GenAI platforms with verifiable RAG, multimodal data ingestion, and multilingual chatbots for disaster management and public transport. He pioneered the concept of Quality of Emotional Experience (QoEE) for NLP at ITU Study Group 12.An alumnus of IIT Delhi, IIM Mumbai, and NDA, he is a 3-time recipient of the Army Commander's Commendation and achieved 200% revenue growth for Carnot in its first year.",
  },
  16: {
    bio: "Shri K Narayana Swamy(KNS) has a Bachelor’s Degree in Commerce (B.Com) & Law (LLB), and a Postgraduate degree in Personnel Management and HR. A Fellow Member (FCS) of the Institute of Company Secretaries (ICSI),  KNS has held senior positions in leading Companies such as HMT Limited, ITI Limited and India Satcom Limited. At India Satcom Limited (an MNC), he was the President-Finance & Company Secretary. As ICSI’s Chairman of the Bangalore Chapter for two terms and ICSI’s Chairman of the Southern India Regional Council, visiting professor for PG courses in reputable colleges in Bangalore, KNS is well versed and experienced in all areas of Corporate Management such as Finance, Legal, Secretarial, Corporate Restructuring, etc.Currently, KNS is the proprietor of M/s. K. Narayana Swamy & Co, a Practicing Company Secretary agency in Bangalore. His Clientele includes Govt of India undertakings such as HMT Limited & ITI Limited, and Govt of Karnataka undertakings such as Karnataka Power Corporation Ltd., Karnataka Power Transmission Corporation Ltd, Krishna Bhagya Jala Nigam Ltd, Karnataka Neeravari Nigam Ltd, Visvesvaraya Jala Nigam Ltd, Karnataka State Financial Corporation, Kerala State Financial Corporation as well as publicly listed entities such as Narayana Hrudayalaya Ltd, VST Tiller Tractor Ltd,  Zuari Cement Ltd, and a number of Private Limited Companies.  ",
  },
  17: {
    bio: "Sunitha is a senior technical leader who defines and guides the overall technical vision and strategy for SRIT Healthcare’s set of solutions. Sunitha & her team are responsible for ensuring that the solution aligns with business needs, is technically sound, and adheres to architectural principles. Her role involves a blend of technical expertise, strategic thinking, and leadership.",
  },
  18: {
    bio: "An Engineering Graduate with an MBA, Rajesh is a certified Project Management Professional (PMP). He brings 30 years of experience in software products & services. His association with SRIT goes back to the year 2006. As the P&L Head of E-Governance Business Unit (BU), he is responsible for the overall strategic direction, operational management, and financial performance of the BU.  This includes setting the vision for the company's role in the e-governance landscape, overseeing the development and deployment of software solutions, and ensuring the organization's long-term sustainability and growth.   ",
  },
  19: {
    bio: "An Electrical and Electronics Engineer, Pradeep has been with SRIT since the year 2009. With his extensive technical experience in IP-MPLS & High-Speed Broadband Internet technologies, Pradeep grew from a Network Engineer to General Manager-Technical.   Pradeep has held senior managerial positions managing KFON O&M, KFON MSP and K-SWAN projects. His responsibilities include designing, managing, and securing IP-MPLS network, as well as leading and mentoring a team of network professionals.",
  },
  20: {
    bio: "Surendra brings a wealth of experience to our organization, with a strong background in finance and accounting. He  holds impressive qualifications that speak of his expertise in the field. Surendra has over 15 years of experience, having worked in several leading organizations where he has overseen financial strategy, fiscal management, and compliance. His previous roles have equipped him with a robust skill set in financial analysis, budgeting, and team leadership, making him an ideal fit for our organization.",
  },
  21: {
    bio: "A Telecom Engineering Graduate, John brings more than 16 years of experience in Software, Networking & Cyber Security technologies. SRIT onboarded John as an Engineer in March 2011. He rapidly grew up the ranks to take charge of technology-focussed project deliveries. John provides technical leadership and guidance for software development teams, ensuring projects are completed successfully, on time, and within budget. He is responsible for the technical vision, strategy, and execution of software development efforts, as well as the development and mentorship of technical staff.",
  },
  22: {
    bio: "JP has a Master’s Degree in Software & Information Technology . He brings more than 21 years of Healthcare Technology experience. JP came onboard SRIT in 2017. He is responsible for driving the overall success of the Healthcare ICT business unit. This includes setting strategic direction, leading teams, managing budgets, and ensuring the business achieves its revenue and profitability goals. JP has a strong understanding of both the healthcare industry and software development.",
  },
  23: {
    bio: "Dr. Vishal has the ownership for Govt Tenders and Special Projects.  He works closely with the SRIT CEO & other leadership members and ensures timely execution of strategically important technology projects which has national importance, projects that contribute to nation building. Academically & professionally, Dr. Vishal is a Practicing Doctor, a specialist Oral Implantologist and Laser Dentist.",
  },
  24: {
    bio: "An Engineering Graduate, Sunil brings more than 30 years of business & revenue growth experience. His earlier stints were with Wipro, HCL, and Motorola. Prior to associating with SRIT, Sunil was the President & Head - Business Development for 13 years in Trinity Mobility Pvt. Ltd., now a Honeywell Company.  His association with SRIT started June 2024. Sunil has the ownership for Strategic Accounts in the Enterprise Application & Systems Integration.  He sets the vision for the company's role in the EAI & SI landscape, overseeing the development and deployment of software solutions, and ensuring SRIT’s long-term sustainability and growth.",
  },
  25: {
    bio: "A qualified Cost & Management Accountant (ACMA), Vijay brings wide range of experience across geographies in India, Africa, Russia & Europe. He has held several key positions across the Globe in different organisations - Vice President Operations in SREI Sahaj Ltd, Head of Operations in Desicrew Ltd and Head of Finance in Glocal Healthcare Ltd. Vijay started as a Finance & Accounting professional and migrated to Projects, e-Governance, Health Care with P&L responsibilities. Vijay has also had the opportunity to run his own enterprise in the ICT sector in association with IIT-M, which eventually became a Govt of India project implemented across India as CSC.  ",
  },
  26: {
    bio: "Arunava is a medical doctor (MBBS). Thereafter he did his post-graduate studies in Computer Science. He then qualified himself as a professional Project Management Professional (PMP). Arunava’s association with SRIT goes back to year 2006. He has the ownership for Strategic Accounts. He sets the vision for the company's role in SRIT’s Healthcare ICT landscape, overseeing the deployment of software solutions, and ensuring SRIT’s long-term sustainability and growth.",
  },
  27: {
    bio: "Srikanth graduated from the Indian Institute of Management. In his capacity as the General Manager for Contracts & Commercial, he ensures financial monitoring and control of customer contracts, cutting across verticals. Srikanth ensures preparation of each project revenue & profitability statement by considering cost provision & material reconciliation. Srikanth monitors financial health of the projects, ensuring systematic flow of operation. He also monitors, reviews & controls outstanding & receivables from customers.",
  },
  28: {
    bio: "Vinu oversees the planning, execution, and delivery of multiple Information and Communication Technology (ICT) projects within SRIT’s healthcare setting. Vinu & his team are responsible for strategic planning, stakeholder management, resource allocation, risk mitigation, and ensuring the successful delivery of program outcomes. Vinu and his team also monitor program performance and drive continuous improvement.",
  },
  29: {
    bio: "Sudipta is from the Engineering stream. He was on-boarded during the year 2024. Sudipta came to SRIT with 27 years of prior work experience. The past 15 years, he worked with MNC “ZTE” as the Director & Head of a Business Unit responsible for business strategy and project implementation across revenue verticals. Amongst his strengths are, building strong organization brand by onboarding quality resources, enhancing project delivery capabilities and bringing-in accountability at all working levels.",
  },
  30: {
    bio: "Ajith is responsible for overseeing the planning, execution, and delivery of technical projects, ensuring they are completed on time, within budget, and to the satisfaction of stakeholders. He acts as a bridge between technical teams and business objectives, requiring strong technical knowledge, project management skills, and leadership abilities. In his capacity as the Quality Lead, Ajith is responsible for overseeing the quality assurance process within the Healthcare software development team.",
  },
  31: {
    bio: "Prabath is from the Engineering stream. He joined SRIT in 2005 as a Software Engineer and grew up the ranks to the position of a Senior Tech Architect. Prabath has played significant roles in all his project deputations – be it projects for Fortune 1000-class Boston Consulting Group, the German Billing Components AG, or RAILTEL’s High-Speed Broadband Network. Prabath is the Principal Architect for the RAILWIRE Broadband & Internet Management System.  He is responsible for designing and overseeing the architecture of software solutions, ensuring they align with business goals and technical standards.",
  },
  32: {
    bio: "Babu did his master’s degree in banking & finance and went on to do his MBA. He has been with the Company since the year 2013. As the Business Head for High-Speed Broadband & Internet, Babu’s role is multifaceted, involving strategic planning, operational oversight, and team leadership to drive organizational success. Babu’s responsibilities include developing and implementing business strategies, managing budgets, overseeing daily operations, and leading teams to achieve company goals. He also plays a crucial role in talent management, including hiring, training, and performance management.",
  },
  33: {
    bio: "Harish graduated from Bharathiar University. In his capacity as the General Manager, he is responsible for overseeing end-to-end bid process, cutting across verticals - from identifying opportunities to submitting winning proposals for government contracts, by ensuring compliance with Govt regulations and tender requirements. Additionally, in his Corporate HR role, he oversees and coordinates all human resource activities within SRIT, ensuring compliance with employment laws and fostering a positive work environment, while also acting as a liaison between management and employees. ",
  },
  34: {
    bio: "Asgar graduated in Information Technology and has been with SRIT since the year 2012. He oversees the entire lifecycle of R-Connect Software Products’ development, ensuring it is delivered on time, within budget, and to the required quality standards, to large customers such as the national telecom service provider BSNL. He & his team are responsible for planning, execution, monitoring, and closing out projects, while also managing communication, risks, and resources.",
  },
  35: {
    bio: "Pallab is a Computer Science & Engineering Graduate with 13 years of hard-core software development and designing experience. Pallab collaborates to create and maintain software, and his role has distinct focuses. He focuses on the overall structure, architecture, and user experience of a software solution, while at the same time, he and his team of developers are responsible for translating those designs into working code and ensuring its functionality.",
  },
  36: {
    bio: "Santosh is an Engineering Graduate in Information Technology, with 13 years of hard-core software development and designing experience. Santosh collaborates to create and maintain software, and his role has distinct focuses. He focuses on the overall structure, architecture, and user experience of a software solution, while at the same time, he and his team of developers are responsible for translating those designs into working code and ensuring its functionality.",
  },
  37: {
    bio: " A Commerce & Accounting Graduate, Binoy joined SRIT in 2011. Binoy is responsible to optimize sales processes, analyse data, and manage the technology that supports SRIT’s KFON MSP sales team, ensuring efficiency and driving revenue growth. Binoy bridges the gap between sales and other departments, like marketing and finance, to align strategies and improve overall performance. His role often involves managing a team of sales operations specialists.",
  },
  38: {
    bio: "A Commerce & Accounting Graduate, Ganapathy joined SRIT in 2010. As the Finance & Accounts Manager, he oversees all financial aspects of SRIT, ensuring accurate financial reporting, compliance, and strategic financial planning. This include managing teams, helping the CFO develop budgets, analyse financial data, and contribute to the overall financial health and success of the company.",
  },
  39: {
    bio: "Sebash is responsible for developing and executing comprehensive marketing communication strategies that align with SRIT’s business objectives and enhance brand awareness. Sebash & his team oversee a range of activities, including content creation, public relations, digital marketing, and branding, ensuring consistent messaging across all platforms. Sebash works with cross-functional teams to achieve marketing goals. ",
  },
};

// Strategic-partner entries 14 and 15 use the same profiles as directors 5 and 6.
personDetails[14] = personDetails[5];
personDetails[15] = personDetails[6];

const createPerson = (id, name, role) => ({
  id,
  name,
  role,
  image: `/imagess/per${id}.webp`,
  ...(personDetails[id] || {
    bio: `The available public profile identifies ${name} as ${role}. A more detailed personal biography has not been published in the source reviewed.`,
    qualification: "Not listed in the available public profile.",
    experience: "Further individual career details are not listed in the available public profile.",
  }),
});

const departments = [
  {
    id: "01",
    title: "Board of Directors",
    subtitle: "Directors",
    people: [
      createPerson(1, "Rangan Thiyagarajan", "Chairman"),
      createPerson(2, "Dr. Madhu Nambiar", "Managing Director & Chief Executive Officer"),
      createPerson(3, "Prasaktha V N", "Wholetime Director"),
      createPerson(4, "P C Martin", "Wholetime Director"),
      createPerson(5, "Dr. Chandan Dash", "Director"),
      createPerson(6, "Dr. Amit Oberoi", "Director"),
      createPerson(7, "R. Ravichandran", "Director"),
    ],
  },
  {
    id: "02",
    title: "Independent Directors",
    subtitle: "Independent Oversight & Accountability",
    people: [
      createPerson(8, "Suresh B Menon", "Independent Director"),
      createPerson(9, "Karthick Varadarajan", "Independent Director"),
      createPerson(10, "Thiruvengadam Ashok", "Independent Director"),
    ],
  },
  {
    id: "03",
    title: "Key Managerial Personnel",
    subtitle: "Corporate Management & Operations",
    people: [
      createPerson(11, "Manesh George", "Chief Financial Officer | Corporate"),
      createPerson(12, "Nidhi Vaswani", "Company Secretary & Compliance Officer"),
    ],
  },
  {
    id: "04",
    title: "Strategic Partners",
    subtitle: "Partnerships & Business Development",
    people: [
      createPerson(13, "Dr. Anil Ramachandran", "Founder Director | Analytical Medical Technologies (AMT)"),
      createPerson(14, "Dr. Chandan Dash", "Founder and CEO | Blossom Tech Enabled Health"),
      createPerson(15, "Dr. Amit Oberoi", "Co-founder & CEO | Carnot Research Pvt Ltd"),
    ],
  },
  {
    id: "05",
    title: "Leadership & Senior Managers",
    subtitle: "Leadership, Expertise & Execution",
    people: [
      createPerson(16, "K Narayana Swamy", "Board Advisory"),
      createPerson(17, "Sunitha Palayekari", "Chief Solution Architect | Healthcare ICT"),
      createPerson(18, "Rajesh Ponnan", "EVP | GovTech"),
      createPerson(19, "Pradeep V", "General Manager | Technical"),
      createPerson(20, "Surendra Kumar, FCA", "Head of Finance & Accounts"),
      createPerson(21, "John Joshy", "EVP & Chief Technical Architect"),
      createPerson(22, "Jithesh P Menon", "CEO | HealthTech ICT"),
      createPerson(23, "Dr. Vishal Madane", "Strategic Business Partner"),
      createPerson(24, "Sunil Jones", "EVP & Strategic Accounts"),
      createPerson(25, "K Vijay Iyer", "EVP & State Head | KFON Managed Service Provider"),
      createPerson(26, "Dr. Arunava D Roy", "Program Manager | Healthcare ICT"),
      createPerson(27, "Srikanth S", "General Manager, Contracts & Commercial"),
      createPerson(28, "Vinu R", "Program Head, COO | Healthcare ICT"),
      createPerson(29, "Sudipta B Mullick", "Program Director | Special Projects"),
      createPerson(30, "Ajith P", "Quality Head & Project Management"),
      createPerson(31, "Prabath G K", "Sr. Technical Architect | Broadband & Internet"),
      createPerson(32, "Babu S", "Head of MSP Business | Broadband & Internet"),
      createPerson(33, "Harish Kumar M", "Head of Corporate Affairs"),
      createPerson(34, "Asgarulla Khan IB", "Program Management | Telecoms & R-Connect"),
      createPerson(35, "Pallab Sharma", "Engineering Head | Healthcare ICT"),
      createPerson(36, "Santosh Kumar", "Design Lead | Healthcare ICT"),
      createPerson(37, "Binoy KP", "Head of Ops KFON | Broadband & Internet"),
      createPerson(38, "Ganapathy BB", "Finance Controller"),
      createPerson(39, "Sebash Carmel", "Senior Designer & Marcom Lead"),
    ],
  },
];


// =====================================================
// DESIGN SYSTEM  (change colours here, one place)
// -----------------------------------------------------
//  Background : soft pastel image (BG_IMAGE)
//  Text       : navy  #091F5C (headings/body), indigo #334DAF (secondary)
//  Surfaces   : snow  #F9FBFF, frost #E8F2FE, mist #D0E4FE
//  Accents    : steel #7096D1 (borders/decor only, too light for text)
// =====================================================

const PALETTE = {
  navy: "#091F5C",
  indigo: "#334DAF",
  steel: "#7096D1",
  mist: "#D0E4FE",
  frost: "#E8F2FE",
  snow: "#F9FBFF",
};

// Put bgweb1.jpg in your public/imagess/ folder (same place as the per*.webp photos)
const BG_IMAGE = "/imagess/bgweb1.jpg";

const THEME = {
  navy: PALETTE.navy,
  navy2: PALETTE.indigo,
  royal: PALETTE.indigo,
  blue: PALETTE.steel,
  sky: PALETTE.steel,
  sky2: PALETTE.mist,
  ice: PALETTE.frost,
  ice2: PALETTE.mist,
  line: PALETTE.mist,
  body: PALETTE.navy,
  mist: PALETTE.indigo,
};

// Accent for each group (drives the soft glow circle, name underline and progress bar)
const stageColors = [
  { accent: PALETTE.indigo, glow: "#FFFFFF" },
  { accent: PALETTE.steel, glow: PALETTE.mist },
  { accent: PALETTE.indigo, glow: "#FFFFFF" },
  { accent: PALETTE.steel, glow: PALETTE.frost },
  { accent: PALETTE.navy, glow: PALETTE.mist },
];

const SCROLL_PER_GROUP = 800;

const fallbackImg = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=DCE9FF&color=0A1F44&size=400`;

const onImgError = (e, name) => {
  const img = e.currentTarget;
  if (img.dataset.fb) return; // already on the fallback, stop looping
  img.dataset.fb = "1";
  img.src = fallbackImg(name);
};

const excerpt = (text, max = 210) => {
  const clean = (text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/\s+\S*$/, "") + "…";
};

// =====================================================
// PERSON CARD (light card, cursor glow + 3D tilt)
// =====================================================

function PersonCard({ person, onReadBio }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    const rx = (y / r.height - 0.5) * -8;
    const ry = (x / r.width - 0.5) * 8;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
  };

  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="pcard relative h-full w-full overflow-hidden rounded-3xl p-6 text-center"
    >
      <div className="pcard-glow" />

      <div className="relative mx-auto mb-5 h-32 w-32">
        <div className="ring-spin absolute -inset-2 rounded-full" />
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          onError={(e) => onImgError(e, person.name)}
          className="relative h-full w-full rounded-full border-4 border-white object-cover"
        />
        <span className="pulse-dot absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-white bg-[#7096D1]" />
      </div>

      <h3 className="relative min-h-[48px] text-base font-bold leading-6 text-[#091F5C]">{person.name}</h3>
      <p className="relative mt-2 min-h-[44px] text-xs leading-5 text-[#334DAF]">{person.role}</p>

      <button
        type="button"
        onClick={() => onReadBio(person)}
        className="pbtn relative mt-4 w-full rounded-xl px-4 py-3 text-sm font-semibold"
      >
        <span>Read bio</span>
      </button>
    </article>
  );
}

// =====================================================
// FULL-SCREEN BIO PAGE
// =====================================================

function BioModal({ person, onClose }) {
  const modalRef = useRef(null);
  const closing = useRef(false);

  const requestClose = useCallback(() => {
    const root = modalRef.current;
    if (!root || closing.current) return;
    closing.current = true;
    gsap.to(root.querySelector(".bio-full"), {
      clipPath: "circle(0% at 50% 100%)",
      duration: 0.7,
      ease: "power3.inOut",
      onComplete: () => {
        closing.current = false;
        onClose();
      },
    });
  }, [onClose]);

  useLayoutEffect(() => {
    if (!person || !modalRef.current) return;
    closing.current = false;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".bio-full",
        { clipPath: "circle(0% at 50% 100%)" },
        { clipPath: "circle(150% at 50% 100%)", duration: 1.1, ease: "power4.inOut" }
      )
        .from(".bio-left-bg", { scale: 1.3, opacity: 0, duration: 1.2 }, 0.2)
        .from(".bio-photo-wrap", { scale: 0.5, rotate: -12, opacity: 0, duration: 1, ease: "back.out(1.6)" }, 0.65)
        .from(".bio-tag", { y: 20, opacity: 0, duration: 0.6 }, 0.8)
        .from(".bio-word", { yPercent: 115, duration: 0.9, stagger: 0.1 }, 0.85)
        .from(".bio-role", { y: 20, opacity: 0, duration: 0.7 }, 1.1)
        .from(".bio-line", { scaleX: 0, transformOrigin: "left center", duration: 1, ease: "power3.inOut" }, 1.1)
        .from(".bio-right-item", { y: 50, opacity: 0, stagger: 0.12, duration: 0.8 }, 1.0)
        .from(".bio-close", { scale: 0, rotate: -180, duration: 0.7, ease: "back.out(2)" }, 1.2);

      gsap.utils.toArray(".bio-orb").forEach((o, i) => {
        gsap.to(o, {
          x: i % 2 ? 50 : -50,
          y: i % 2 ? -40 : 40,
          duration: 5 + i * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, modalRef);
    return () => ctx.revert();
  }, [person]);

  useEffect(() => {
    if (!person) return;
    const onKey = (e) => e.key === "Escape" && requestClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [person, requestClose]);

  const onMove = (e) => {
    const root = modalRef.current;
    if (!root) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    gsap.to(root.querySelector(".bio-photo-wrap"), { x: x * 14, y: y * 14, duration: 0.8, ease: "power2.out" });
    gsap.to(root.querySelector(".bio-left-bg"), { x: x * -20, y: y * -20, duration: 1.2, ease: "power2.out" });
  };

  if (!person) return null;

  return (
    <div ref={modalRef} className="fixed inset-0 z-[200]" role="dialog" aria-modal="true" aria-label={`${person.name} profile`}>
      <div className="bio-full absolute inset-0 overflow-y-auto bg-[#E8F2FE]" onMouseMove={onMove}>
        <div className="grid min-h-full lg:grid-cols-[44%_56%]">
          {/* LEFT: identity (dark navy, white text) */}
          <div className="bio-left relative overflow-hidden px-8 pb-16 pt-24 text-white sm:px-14 lg:sticky lg:top-0 lg:h-screen lg:self-start lg:px-16 lg:pt-0">
            <div className="bio-left-bg absolute -inset-10">
              <div className="bio-grid absolute inset-0" />
              <div className="bio-orb absolute -left-20 top-10 h-[320px] w-[320px] rounded-full bg-[#7096D1]/45 blur-[80px]" />
              <div className="bio-orb absolute -bottom-10 right-0 h-[280px] w-[280px] rounded-full bg-[#D0E4FE]/30 blur-[80px]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-center">
              <div className="bio-photo-wrap relative mb-10 h-56 w-56 sm:h-64 sm:w-64">
                <div className="ring-spin absolute -inset-3 rounded-full" />
                <img
                  src={person.image}
                  alt={person.name}
                  onError={(e) => onImgError(e, person.name)}
                  className="relative h-full w-full rounded-full border-[6px] border-[#091F5C] object-cover shadow-2xl"
                />
                <span className="pulse-dot absolute bottom-4 right-4 h-6 w-6 rounded-full border-4 border-[#091F5C] bg-[#7096D1]" />
              </div>

              <p className="bio-tag text-sm font-semibold tracking-wide text-[#D0E4FE]">Leadership profile</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
                {person.name.split(" ").map((w, i) => (
                  <span key={i} className="word-mask mr-3">
                    <span className="bio-word inline-block">{w}</span>
                  </span>
                ))}
              </h2>
              <div className="bio-line mt-6 h-[3px] w-32 rounded bg-gradient-to-r from-[#D0E4FE] to-transparent" />
              <p className="bio-role mt-5 max-w-md text-base leading-7 text-[#D0E4FE]">{person.role}</p>
            </div>
          </div>

          {/* RIGHT: biography (light, navy text) */}
          <div className="relative px-8 pb-20 pt-24 sm:px-14 lg:px-16 lg:pt-28">
            <h3 className="bio-right-item text-sm font-bold tracking-wide text-[#334DAF]">Biography</h3>
            <p className="bio-right-item mt-5 text-lg leading-9 text-[#091F5C] sm:text-xl">{person.bio}</p>

            <button
              type="button"
              onClick={requestClose}
              className="bio-right-item pbtn mt-10 w-full rounded-xl py-4 text-sm font-semibold sm:w-auto sm:px-12"
            >
              <span>← Back to leadership</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={requestClose}
          aria-label="Close profile"
          className="bio-close fixed right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#D0E4FE] bg-white text-2xl text-[#091F5C] shadow-lg transition hover:rotate-90 hover:bg-[#334DAF] hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// =====================================================
// MAIN PAGE
// =====================================================

export default function Directors() {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const circleRef = useRef(null);
  const portraitWrapRef = useRef(null);
  const progressRef = useRef(null);
  const thumbsRef = useRef(null);
  const thumbBtnRefs = useRef([]);

  const activeRef = useRef(0);
  const panelRef = useRef(null);
  const tabsRef = useRef(null);
  const btnRefs = useRef({});
  const firstRender = useRef(true);
  const firstStage = useRef(true);

  const [activeGroup, setActiveGroup] = useState(0);
  const [activePerson, setActivePerson] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [gridId, setGridId] = useState(departments[0].id);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const closeBio = useCallback(() => setSelectedPerson(null), []);

  const group = departments[activeGroup];
  const person = group.people[Math.min(activePerson, group.people.length - 1)];
  const gridGroup = departments.find((d) => d.id === gridId);
  const bigGroup = group.people.length > 12; // Leadership & Senior Managers: 3 rows
  // every group is a single line of photos, except the big one (3 rows)
  const thumbCols = bigGroup ? Math.ceil(group.people.length / 3) : group.people.length;

  /* ---------- background blend (outside any context so it never snaps back) ---------- */

  useEffect(() => {
    const c = stageColors[activeGroup];
    gsap.to(circleRef.current, { backgroundColor: c.glow, duration: 0.8, ease: "power2.out", overwrite: "auto" });

    departments[activeGroup].people.forEach((p) => {
      const im = new Image();
      im.src = p.image;
    });
  }, [activeGroup]);

  /* ---------- group change: title + thumbnails ---------- */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".v-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" });
      gsap.fromTo(".group-chip", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
      gsap.fromTo(
        ".thumb",
        { y: 36, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.045,
          ease: "back.out(1.5)",
          delay: firstStage.current ? 0.9 : 0.25,
        }
      );
    }, stageRef);
    return () => ctx.revert();
  }, [activeGroup]);

  /* ---------- person change: portrait wipe + text reveal ---------- */

  useLayoutEffect(() => {
    const delay = firstStage.current ? 0.35 : 0;
    firstStage.current = false;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay });
      tl.fromTo(
        ".portrait-img",
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.25 },
        { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1, ease: "power4.inOut" },
        0
      )
        .fromTo(".p-word", { yPercent: 115 }, { yPercent: 0, duration: 0.85, stagger: 0.09 }, 0.15)
        .fromTo(".p-line", { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power3.inOut" }, 0.3)
        .fromTo(".p-item", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.09 }, 0.35);
    }, stageRef);
    return () => ctx.revert();
  }, [activeGroup, activePerson]);

  // Keep the active thumbnail visible inside its strip (never scrolls the page)
  useEffect(() => {
    const strip = thumbsRef.current;
    const btn = thumbBtnRefs.current[activePerson];
    if (!strip || !btn) return;
    strip.scrollTo({ left: btn.offsetLeft - (strip.clientWidth - btn.offsetWidth) / 2, behavior: "smooth" });
  }, [activePerson, activeGroup]);

  /* ---------- pinned scroll (same structure as Home) ---------- */

  useLayoutEffect(() => {
    const n = departments.length;
    const end = `+=${n * SCROLL_PER_GROUP}`;

    const ctx = gsap.context(() => {
      gsap.to(portraitWrapRef.current, { y: -12, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".group-scroll",
          start: "top top",
          end,
          scrub: 1,
          pin: ".group-stage",
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "group-scroll",

          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(n - 1, Math.floor(progress * n));

            if (index !== activeRef.current) {
              activeRef.current = index;
              setActiveGroup(index);
              setActivePerson(0);
            }

            gsap.set(progressRef.current, { scaleX: progress });
          },
        },
      });

      tl.to(".background-circle", { scale: 2.2, rotation: 360, ease: "none" }, 0);

      gsap.utils.toArray(".particle").forEach((particle, index) => {
        gsap.to(particle, {
          x: index % 2 === 0 ? 260 : -260,
          y: index % 3 === 0 ? -340 : 340,
          rotation: index * 180,
          scrollTrigger: { trigger: ".group-scroll", start: "top top", end, scrub: 2 },
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  /* ---------- tabs + grid ---------- */

  const measure = useCallback(() => {
    const btn = btnRefs.current[gridId];
    if (btn) setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [gridId]);

  useLayoutEffect(() => {
    measure();
    const c = tabsRef.current;
    const btn = btnRefs.current[gridId];
    if (c && btn) {
      c.scrollTo({ left: btn.offsetLeft - (c.clientWidth - btn.offsetWidth) / 2, behavior: "smooth" });
    }
  }, [gridId, measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    if (document.fonts?.ready) document.fonts.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useLayoutEffect(() => {
    if (!panelRef.current) return;
    const isFirst = firstRender.current;
    firstRender.current = false;

    const ctx = gsap.context(() => {
      if (isFirst) {
        gsap.from(".panel-head", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".people-section", start: "top 65%", once: true },
        });
        gsap.from(".person-reveal", {
          y: 60,
          opacity: 0,
          stagger: 0.07,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".people-section", start: "top 55%", once: true },
        });
      } else {
        gsap.from(".panel-head", { y: 24, opacity: 0, duration: 0.6, ease: "power3.out" });
        gsap.from(".person-reveal", { y: 50, opacity: 0, stagger: 0.07, duration: 0.7, delay: 0.1, ease: "power3.out" });
      }
    }, panelRef);
    return () => ctx.revert();
  }, [gridId]);

  const onTabKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + departments.length) % departments.length;
    const id = departments[next].id;
    btnRefs.current[id]?.focus();
    setGridId(id);
  };

  const goToGroup = (index) => {
    const trigger = ScrollTrigger.getById("group-scroll");
    if (!trigger) return;
    const range = trigger.end - trigger.start;
    window.scrollTo({ top: trigger.start + ((index + 0.5) / departments.length) * range, behavior: "smooth" });
  };

  const viewMembers = () => {
    setGridId(group.id);
    document.getElementById("people")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      ref={rootRef}
      className="directors-root min-h-screen overflow-x-clip text-[#091F5C]"
      style={{
        "--navy": THEME.navy,
        "--navy-2": THEME.navy2,
        "--royal": THEME.royal,
        "--blue": THEME.blue,
        "--sky": THEME.sky,
        "--sky-2": THEME.sky2,
        "--ice": THEME.ice,
        "--ice-2": THEME.ice2,
        "--line": THEME.line,
        "--body": THEME.body,
        "--mist": THEME.mist,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .directors-root { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif; background: var(--ice); }
        body { margin: 0; overflow-x: hidden; }

        .grad-text { background: linear-gradient(90deg, var(--navy), var(--royal));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }

        /* ---------- Pinned stage (dark navy, white text) ---------- */
        .group-stage { color: var(--navy); }
        .stage-bg, .people-section {
          background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),
                      url("${BG_IMAGE}") center / cover no-repeat,
                      linear-gradient(135deg, #a2d1ed 0%, #EEEBF5 45%, #F7E6EE 78%, #e6aced 100%); }
        .stage-grid { opacity: .5; pointer-events: none;
          background-image: linear-gradient(rgba(51,77,175,.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(51,77,175,.07) 1px, transparent 1px);
          background-size: 64px 64px;
          -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
          mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%); }
        .v-text { writing-mode: vertical-rl; transform: rotate(180deg); white-space: nowrap; }
        .portrait-box { filter: drop-shadow(0 28px 30px rgba(9,31,92,.22)); }
        .p-line { background: linear-gradient(90deg, var(--accent, var(--sky)), transparent); transform-origin: left center; }
        .clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .clamp-4 { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }

        .thumbs-strip { scrollbar-width: none; }
        .thumbs-strip::-webkit-scrollbar { display: none; }
        .thumb { position: relative; flex: 0 0 auto; border: 0; padding: 0; cursor: pointer; overflow: hidden;
          border-radius: 10px; opacity: .9; filter: saturate(.85);
          transition: opacity .35s, filter .35s, transform .35s, box-shadow .35s; }
        .thumb:hover { opacity: .9; filter: none; transform: translateY(-4px); }
        .thumb.active { opacity: 1; filter: none; transform: translateY(-8px);
          box-shadow: 0 0 0 2px var(--royal), 0 16px 30px -12px rgba(9,31,92,.45); }
        .thumb img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top; background: #D0E4FE; }

        /* 2-line thumbnail grid: every member visible, no scrolling */
        .thumbs-grid { display: grid; grid-template-columns: repeat(var(--cols), minmax(0, var(--thumb-max, 110px))); gap: 10px; padding: 4px 4px 6px; align-items: start; justify-content: start; }
        .thumbs-grid .thumb { width: 100%; height: auto; aspect-ratio: 4 / 5; }
        .thumbs-grid.thumbs-big .thumb { aspect-ratio: 1 / 1.1; }
        .thumbs-grid .thumb:hover, .thumbs-grid .thumb.active { transform: translateY(-4px); }
        @media (max-width: 767px) { .thumbs-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); } }

        .btn-primary { background: var(--royal); color: #fff; transition: transform .3s, background .3s, box-shadow .3s; }
        .btn-primary:hover { background: var(--navy); transform: scale(1.05); box-shadow: 0 12px 28px -10px rgba(9,31,92,.55); }
        .btn-ghost { border: 1.5px solid var(--royal); color: var(--navy); background: transparent;
          transition: background .3s, color .3s, border-color .3s; }
        .btn-ghost:hover { background: var(--royal); color: #fff; border-color: var(--royal); }

        /* ---------- Light section ---------- */
        .people-section { background: linear-gradient(180deg, var(--ice) 0%, var(--ice-2) 100%); }

        .tabs-pill { position: relative; border-radius: 9999px; background: #F9FBFF; border: 1px solid var(--line);
          overflow: hidden; box-shadow: 0 16px 34px -22px rgba(29,78,216,.5); }
        .tabs-track { position: relative; display: flex; min-width: 100%; }
        .tab-indicator { position: absolute; top: 0; bottom: 0; border-radius: 9999px;
          background: linear-gradient(90deg, var(--navy), var(--royal)); pointer-events: none;
          transition: left .5s cubic-bezier(.65,0,.25,1), width .5s cubic-bezier(.65,0,.25,1); }
        .tab-btn { position: relative; z-index: 1; flex: 1 1 auto; min-width: 0; padding: 22px 14px; text-align: center;
          font: 600 clamp(13px, 1.25vw, 17px)/1.2 'Inter', system-ui, sans-serif; color: var(--body); background: transparent; border: 0;
          cursor: pointer; white-space: nowrap; transition: color .3s; }
        .tab-btn:hover { color: var(--navy); }
        .tab-btn.active { color: #fff; }
        /* small screens: tabs wrap into rows instead of scrolling sideways */
        @media (max-width: 900px) {
          .tabs-pill { border-radius: 24px; }
          .tabs-track { flex-wrap: wrap; padding: 6px; gap: 4px; }
          .tab-btn { flex: 1 1 45%; padding: 14px 12px; font-size: 14px; white-space: normal; border-radius: 9999px; }
          .tab-indicator { display: none; }
          .tab-btn.active { background: linear-gradient(90deg, var(--navy), var(--royal)); }
        }

        .panel { min-height: 640px; }
        .group-count { background: #D0E4FE; color: var(--navy); }
        .rail-line { height: 1px; background: linear-gradient(90deg, var(--royal), transparent); opacity: .5; }

        .people-grid { display: grid; gap: 24px; justify-content: start; grid-template-columns: repeat(auto-fill, 250px); }
        @media (max-width: 640px) { .people-grid { grid-template-columns: minmax(0, 280px); justify-content: center; } }

        /* ---------- Cards ---------- */
        .pcard { --mx: 50%; --my: 50%; background: #F9FBFF; border: 1px solid var(--line);
          box-shadow: 0 14px 34px -22px rgba(9,31,92,.35);
          transition: transform .25s ease-out, border-color .4s, box-shadow .4s; }
        .pcard:hover { border-color: var(--blue); box-shadow: 0 28px 50px -24px rgba(51,77,175,.45); }
        .pcard-glow { position: absolute; inset: 0; opacity: 0; transition: opacity .4s; pointer-events: none;
          background: radial-gradient(260px circle at var(--mx) var(--my), rgba(112,150,209,.25), transparent 60%); }
        .pcard:hover .pcard-glow { opacity: 1; }
        .ring-spin { background: conic-gradient(from 0deg, #334DAF, transparent 30%, #7096D1 60%, transparent 80%, #334DAF);
          animation: spin 6s linear infinite;
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px)); }
        @keyframes spin { to { transform: rotate(360deg); } }
        .pulse-dot { animation: pulse 2.4s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(112,150,209,.7); } 50% { box-shadow: 0 0 0 8px rgba(112,150,209,0); } }

        .pbtn { position: relative; overflow: hidden; background: var(--royal); color: #fff; border: 0; cursor: pointer;
          transition: box-shadow .3s; }
        .pbtn::before { content: ""; position: absolute; inset: 0; background: var(--navy); transform: translateX(-101%); transition: transform .4s ease; }
        .pbtn:hover::before { transform: translateX(0); }
        .pbtn:hover { box-shadow: 0 12px 30px -10px rgba(51,77,175,.6); }
        .pbtn span { position: relative; }

        /* ---------- Bio page ---------- */
        .word-mask { display: inline-block; overflow: hidden; vertical-align: top; padding-bottom: .1em; }
        .bio-left { background: linear-gradient(135deg, #091F5C 0%, #334DAF 100%); }
        .bio-grid { opacity: .4;
          background-image: linear-gradient(rgba(245, 247, 249, 0.9) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(250, 252, 254, 0.92) 1px, transparent 1px);
          background-size: 56px 56px; animation: gridmove 12s linear infinite; }
        @keyframes gridmove { to { background-position: 56px 56px, 56px 56px; } }

        :focus-visible { outline: 2px solid var(--royal); outline-offset: 3px; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition-duration: .01ms !important; }
        }
      `}</style>

      {/* =====================================
          PINNED STAGE
      ===================================== */}
      <section id="leadership" className="group-scroll relative w-full">
        <div
          ref={stageRef}
          className="group-stage stage-bg relative flex h-screen min-h-[650px] w-full items-center justify-center overflow-hidden"
          style={{ "--accent": stageColors[activeGroup].accent }}
        >
          <div className="stage-grid absolute inset-0" />

          <div
            ref={circleRef}
            className="background-circle absolute h-[600px] w-[600px] rounded-full opacity-70 blur-3xl md:h-[900px] md:w-[900px]"
            style={{ backgroundColor: stageColors[0].glow }}
          />

          <div className="particle absolute left-[20%] top-[22%] h-3 w-3 rounded-full bg-[#7096D1]/50" />
          <div className="particle absolute right-[25%] top-[28%] h-2 w-2 rounded-full bg-[#334DAF]/40" />
          <div className="particle absolute bottom-[18%] left-[38%] h-3 w-3 rounded-full bg-[#091F5C]/25" />
          <div className="particle absolute bottom-[22%] right-[12%] h-4 w-4 rounded-full bg-[#f5f6f7]/40" />

          <div className="relative z-20 flex w-full max-w-[1240px] flex-col gap-5 px-6 md:mr-auto md:flex-row md:items-stretch md:gap-8 md:pl-4 md:pr-10 2xl:max-w-[1500px] 2xl:pr-[320px]">
            {/* Vertical group title (desktop) */}
            <div className="hidden w-24 shrink-0 items-center justify-center overflow-hidden md:flex lg:w-28">
              <div className="v-text">
                <h2 className="v-title text-3xl font-black tracking-tight lg:text-4xl">
                  {group.title}
                </h2>
                <p className="group-chip text-sm font-bold tracking-wide text-[#334DAF] lg:text-base">{group.subtitle}</p>
              </div>
            </div>

            {/* Group title + subtitle (mobile) */}
            <div className="md:hidden">
              <h2 className="v-title text-2xl font-black tracking-tight">
                {group.title}
              </h2>
              <p className="mt-1 text-sm font-bold tracking-wide text-[#334DAF]">{group.subtitle}</p>
            </div>

            {/* Portrait */}
            <div ref={portraitWrapRef} className="relative shrink-0 self-center md:self-auto">
              <div className="portrait-box relative h-[34vh] min-h-[240px] w-[272px] md:h-[max(62vh,440px)] md:w-[calc(max(62vh,440px)*0.8)]">
                <img
                  key={`${group.id}-${person.id}`}
                  src={person.image}
                  alt={person.name}
                  onError={(e) => onImgError(e, person.name)}
                  className="portrait-img h-full w-full rounded-2xl object-cover object-top"
                />
              </div>
            </div>

            {/* Details + thumbnails */}
            <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 md:pl-2">
              <div>
                <h3 className="text-4xl font-black leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
                  {person.name.split(" ").map((w, i) => (
                    <span key={i} className="word-mask mr-3">
                      <span className="p-word inline-block">{w}</span>
                    </span>
                  ))}
                </h3>

                <p className="p-item mt-4 max-w-md text-base font-semibold leading-6 text-[#334DAF] md:text-lg">
                  {person.role}
                </p>

                <div className="p-line mt-5 h-[3px] w-28 rounded" />

                <p className="p-item clamp-4 mt-5 hidden max-w-xl text-base font-medium leading-8 text-[#091F5C] md:block md:text-lg">
                  {excerpt(person.bio)}
                </p>

                <div className="p-item mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPerson(person)}
                    className="btn-primary rounded-full px-6 py-3 text-sm font-bold"
                  >
                    Read full bio
                  </button>
                  <button type="button" onClick={viewMembers} className="btn-ghost rounded-full px-6 py-3 text-sm font-bold">
                    View all members
                  </button>
                </div>
              </div>

              {group.people.length > 1 && (
                <div
                  ref={thumbsRef}
                  className={`thumbs-grid mt-6 md:mt-10 ${bigGroup ? "thumbs-big" : ""}`}
                  style={{ "--cols": thumbCols, "--thumb-max": bigGroup ? "84px" : "92px" }}
                  role="tablist"
                  aria-label={`${group.title} members`}
                >
                  {group.people.map((p, i) => (
                    <button
                      key={`${group.id}-${p.id}`}
                      ref={(el) => (thumbBtnRefs.current[i] = el)}
                      type="button"
                      role="tab"
                      aria-selected={i === activePerson}
                      aria-label={p.name}
                      title={p.name}
                      onClick={() => setActivePerson(i)}
                      className={`thumb ${i === activePerson ? "active" : ""}`}
                    >
                      <img src={p.image} alt="" loading="lazy" onError={(e) => onImgError(e, p.name)} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Group navigation (large screens) */}
          <div className="absolute right-[1.2%] top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 2xl:flex">
            {departments.map((d, index) => (
              <button
                key={d.id}
                type="button"
                onClick={() => goToGroup(index)}
                className={`w-max whitespace-nowrap bg-[linear-gradient(to_left,currentColor,transparent)] bg-[length:100%_3px] bg-bottom bg-no-repeat pb-2 text-right text-lg font-normal leading-6 transition-all duration-300 ${
                  activeGroup === index
                    ? "scale-105 text-[#091F5C]"
                    : "text-[#7C8599] hover:text-[#091F5C]"
                }`}
              >
                {d.title}
              </button>
            ))}
          </div>

          
          <div className="absolute bottom-0 left-0 z-40 h-[3px] w-full bg-[#091F5C]/10">
            <div
              ref={progressRef}
              className="h-full origin-left bg-[#334DAF]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </section>

      {/* =====================================
          PEOPLE GRID (light)
      ===================================== */}
      <section id="people" className="people-section relative z-10 w-full" aria-label="Leadership members">
        <div className="mx-auto max-w-[1280px] px-5 pb-24 pt-20 sm:px-10 lg:px-14">
          <p className="text-sm font-semibold tracking-wide text-[#334DAF]">Our Leadership</p>
          <h2 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-[#091F5C] sm:text-6xl">
            People behind <span className="grad-text">our vision.</span>
          </h2>

          <nav className="tabs-pill mt-10" aria-label="Leadership groups">
            <div ref={tabsRef} className="tabs-scroll" role="tablist">
              <div className="tabs-track">
                <span className="tab-indicator" style={{ left: pill.left, width: pill.width }} />
                {departments.map((d, i) => (
                  <button
                    key={d.id}
                    ref={(el) => (btnRefs.current[d.id] = el)}
                    type="button"
                    role="tab"
                    id={`tab-${d.id}`}
                    aria-selected={gridId === d.id}
                    aria-controls="people-panel"
                    tabIndex={gridId === d.id ? 0 : -1}
                    onClick={() => setGridId(d.id)}
                    onKeyDown={(e) => onTabKey(e, i)}
                    className={`tab-btn ${gridId === d.id ? "active" : ""}`}
                  >
                    {d.title}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          <div ref={panelRef} id="people-panel" role="tabpanel" aria-labelledby={`tab-${gridId}`} className="panel pt-14">
            <div className="panel-head mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-3xl font-black tracking-tight text-[#091F5C] sm:text-4xl">
                  {gridGroup.title}
                </h3>
                <p className="mt-2 text-base text-[#334DAF]">{gridGroup.subtitle}</p>
              </div>
            </div>

            <div className="rail-line mb-10" />

            <div className="people-grid">
              {gridGroup.people.map((p) => (
                <div key={`${gridGroup.id}-${p.id}`} className="person-reveal">
                  <PersonCard person={p} onReadBio={setSelectedPerson} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BioModal person={selectedPerson} onClose={closeBio} />
    </main>
  );
}
