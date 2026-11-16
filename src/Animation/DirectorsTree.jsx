import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import gsap from "gsap";

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


const fallbackImg = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=dbeafe&color=0b1f3a&size=300`;

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

      // Floating orbs
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

  // Mouse parallax on the photo
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
      <div className="bio-full absolute inset-0 overflow-y-auto bg-[#eaf3ff]" onMouseMove={onMove}>
        <div className="grid min-h-full lg:grid-cols-[44%_56%]">
          {/* LEFT: identity */}
          <div className="bio-left relative overflow-hidden px-8 pb-16 pt-24 text-white sm:px-14 lg:sticky lg:top-0 lg:h-screen lg:self-start lg:px-16 lg:pt-0">
            <div className="bio-left-bg absolute -inset-10">
              <div className="bio-grid absolute inset-0" />
              <div className="bio-orb absolute -left-20 top-10 h-[320px] w-[320px] rounded-full bg-sky-500/40 blur-[80px]" />
              <div className="bio-orb absolute -bottom-10 right-0 h-[280px] w-[280px] rounded-full bg-blue-400/30 blur-[80px]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-center">
              <div className="bio-photo-wrap relative mb-10 h-56 w-56 sm:h-64 sm:w-64">
                <div className="ring-spin absolute -inset-3 rounded-full" />
                <img
                  src={person.image}
                  alt={person.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImg(person.name);
                  }}
                  className="relative h-full w-full rounded-full border-[6px] border-[#0b1f3a] object-cover shadow-2xl"
                />
                <span className="pulse-dot absolute bottom-4 right-4 h-6 w-6 rounded-full border-4 border-[#0b1f3a] bg-sky-400" />
              </div>

              <p className="bio-tag text-sm font-semibold uppercase tracking-widest text-sky-300">Leadership profile</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
                {person.name.split(" ").map((w, i) => (
                  <span key={i} className="word-mask mr-3">
                    <span className="bio-word inline-block">{w}</span>
                  </span>
                ))}
              </h2>
              <div className="bio-line mt-6 h-[3px] w-32 rounded bg-gradient-to-r from-sky-400 to-transparent" />
              <p className="bio-role mt-5 max-w-md text-base leading-7 text-sky-100">{person.role}</p>
            </div>
          </div>

          {/* RIGHT: details */}
          <div className="relative px-8 pb-20 pt-24 sm:px-14 lg:px-16 lg:pt-28">
            <h3 className="bio-right-item text-sm font-bold uppercase tracking-widest text-[#14407a]">Biography</h3>
            <p className="bio-right-item mt-5 text-base leading-9 text-slate-700 sm:text-lg">{person.bio}</p>

        
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
  className="bio-close fixed right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-blue-700 bg-blue-600 text-2xl text-white shadow-lg transition-all duration-300 hover:rotate-90 hover:border-blue-950 hover:bg-blue-950 hover:text-white"
>
  ×
</button>
      </div>
    </div>
  );
}

// =====================================================
// TREE LAYOUT (hub in the middle, groups branching out)
// =====================================================

const W = 1280;
const H = 740;
const grp = (id) => departments.find((d) => d.id === id);

const onImgError = (name) => (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = fallbackImg(name);
};

// Connector lines, drawn outward from the hub
const PATHS = [
  "M640 280 V88",
  "M580 355 H236",
  "M700 355 H1044",
  "M640 380 V470",
  "M640 470 Q640 490 620 490 H440 Q420 490 420 510 V548",
  "M640 470 Q640 490 660 490 H840 Q860 490 860 510 V548",
];

function Tile({ person, size = 52, onOpen, tip = "up" }) {
  return (
    <button
      type="button"
      className="dt-tile"
      style={{ width: size, height: size }}
      onClick={() => onOpen(person)}
      aria-label={`${person.name}, ${person.role}. Read bio`}
    >
      <img src={person.image} alt="" loading="lazy" onError={onImgError(person.name)} />
      <span className={`dt-tip dt-tip-${tip}`}>
        <b>{person.name}</b>
        <i>{person.role}</i>
      </span>
    </button>
  );
}



function Chip({ person, onOpen }) {
  return (
    <button
      type="button"
      className="dt-chip"
      onClick={() => onOpen(person)}
      aria-label={`${person.name}, ${person.role}. Read bio`}
    >
      <img src={person.image} alt="" loading="lazy" onError={onImgError(person.name)} />
      <span className="dt-chip-name">{person.name}</span>
      <span className="dt-tip dt-tip-down">
        <b>{person.name}</b>
        <i>{person.role}</i>
      </span>
    </button>
  );
}

function Box({ x, y, w, h, label, count, style, children }) {
  return (
    <div className="dt-box" style={{ left: x, top: y, width: w, height: h, ...style }}>
      
      {children}
    </div>
  );
}

function Pill({ x, y, children }) {
  return (
    <span className="dt-pill" style={{ left: x, top: y }}>
      {children}
    </span>
  );
}

export default function DirectorsTree() {
  const rootRef = useRef(null);
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const closeBio = useCallback(() => setSelectedPerson(null), []);

  const board = grp("01").people;
  const independent = grp("02").people;
  const kmp = grp("03").people;
  const partners = grp("04").people;
  const leaders = grp("05").people;

  // Fit the fixed-size stage to the available width
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const fit = () => setScale(Math.max(0.5, Math.min(1, (el.clientWidth - 48) / W)));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dt-intro", { y: 24, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out" });
      gsap.from(".dt-hub", { scale: 0.7, opacity: 0, duration: 0.8, ease: "back.out(1.6)" });
      gsap.from(".dt-svg path", { opacity: 0, stagger: 0.08, duration: 0.8, delay: 0.3 });
      gsap.from(".dt-box", { y: 24, opacity: 0, stagger: 0.12, duration: 0.8, delay: 0.5, ease: "power3.out" });
      gsap.from(".dt-pill", { opacity: 0, stagger: 0.06, duration: 0.6, delay: 0.7 });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="dt-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .dt-root {
          --blue: #2563eb;
          --blue-2: #3b82f6;
          --blue-3: #93c5fd;
          --navy: #10233f;
          --ink: #111827;
          --pale: #f4f9ff;
          min-height: 100vh;
          overflow-x: hidden;
          color: var(--ink);
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
          background: #f4f9ff;
          background-image: radial-gradient(rgba(37,99,235,.11) 1px, transparent 1px),
                            linear-gradient(135deg, #f8fbff 0%, #edf5ff 52%, #f7fbff 100%);
          background-size: 22px 22px, auto;
        }
        body { margin: 0; }

        .dt-head { max-width: 1280px; margin: 0 auto; padding: 56px 24px 8px; }
        .dt-eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: #2563eb; margin: 0; }
        .dt-title { margin: 12px 0 0; font-size: clamp(32px, 5vw, 56px); font-weight: 900; line-height: 1.05; letter-spacing: -.035em; color: #111827; }
        .dt-grad { background: linear-gradient(90deg, #10233f, #2563eb 58%, #60a5fa); -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent; }
        .dt-hint { margin: 14px 0 0; font-size: 14px; color: #52647d; }

        .dt-wrap { overflow-x: auto; padding: 40px 24px 64px; }
        .dt-sizer { margin: 0 auto; }
        .dt-stage { position: relative; transform-origin: 0 0; }
        .dt-svg { position: absolute; inset: 0; pointer-events: none; overflow: visible; }
        .dt-svg path { fill: none; stroke: #3b82f6; stroke-width: 1.7; stroke-dasharray: 3 6; stroke-linecap: round;
          animation: dt-flow 1.6s linear infinite; }
        @keyframes dt-flow { to { stroke-dashoffset: -18; } }

        .dt-hub { position: absolute; left: 580px; top: 280px; width: 120px; height: 100px; border-radius: 16px;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
          color: #f4f5f7; background: linear-gradient(145deg, #3b82f6 0%, #10233f 88%);
          border: 1px solid rgba(37,99,235,.35); box-shadow: 0 16px 45px rgba(37,99,235,.25); }
        .dt-hub strong { font-size: 26px; font-weight: 900; letter-spacing: -.02em; }
        .dt-hub small { font-size: 10px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: #dbeafe; }

        .dt-pill { position: absolute; transform: translate(-50%, -50%); white-space: nowrap; z-index: 2;
          color: #fff; background: #07075e; padding: 8px 16px; border: 1px solid rgba(255,255,255,.5); border-radius: 7px;
          font-size: 13px; font-weight: 700; box-shadow: 0 7px 20px rgba(30,64,175,.18); }

        .dt-box { position: absolute; box-sizing: border-box; display: flex; align-items: center; justify-content: center;
          gap: 8px; padding: 12px; border-radius: 16px; background: rgba(255,255,255,.96);
          border: 1px solid #c7dcf7; box-shadow: 0 12px 32px rgba(30,64,175,.08); }
        .dt-box.grid { display: grid; justify-content: center; align-content: center; }
        .dt-pill-label { left: 50%; top: 0; padding: 6px 12px; font-size: 11px; letter-spacing: .02em; z-index: 3; }

        .dt-chip { position: relative; flex: 1 1 0; min-width: 0; height: 40px; display: flex; align-items: center; gap: 8px;
          padding: 0 10px 0 6px; border: 1px solid #d8e6f8; border-radius: 9px; cursor: pointer; color: #111827;
          font: 700 12px/1 'Inter', sans-serif; background: #f4f8ff; transition: background .25s, transform .25s, box-shadow .25s; }
        .dt-chip:hover, .dt-chip:focus-visible { background: #dbeafe; border-color: #60a5fa; transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(37,99,235,.14); }
        .dt-chip img { width: 28px; height: 28px; border-radius: 7px; object-fit: cover; background: #fff; flex: none; border: 1px solid #dbeafe; }
        .dt-chip-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left; }

        .dt-tile { position: relative; padding: 0; border: 2px solid #d7e6f8; border-radius: 11px; cursor: pointer;
          background: #fff; transition: transform .25s, box-shadow .25s, border-color .25s; flex: none; }
        .dt-tile img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; display: block; }
        .dt-tile:hover, .dt-tile:focus-visible { transform: translateY(-4px) scale(1.04); border-color: #2563eb;
          box-shadow: 0 12px 26px -10px rgba(37,99,235,.45); }
        .dt-empty { display: block; flex: none; border: 1px dashed #93c5fd; border-radius: 10px; background: #eff6ff; }

        .dt-tip { position: absolute; left: 50%; transform: translateX(-50%); z-index: 30; width: max-content; max-width: 190px;
          padding: 9px 11px; border: 1px solid #dbeafe; border-radius: 9px; background: #fff; color: #111827; text-align: left; opacity: 0;
          pointer-events: none; transition: opacity .2s; box-shadow: 0 12px 30px rgba(15,23,42,.16); }
        .dt-tip-up { bottom: calc(100% + 8px); }
        .dt-tip-down { top: calc(100% + 8px); }
        .dt-tip b { display: block; font-size: 12px; font-weight: 800; line-height: 1.3; white-space: normal; }
        .dt-tip i { display: block; margin-top: 3px; font-style: normal; font-size: 11px; font-weight: 500; line-height: 1.3; color: #52647d; white-space: normal; }
        .dt-tile:hover .dt-tip, .dt-tile:focus-visible .dt-tip,
        .dt-chip:hover .dt-tip, .dt-chip:focus-visible .dt-tip { opacity: 1; }
        .dt-tile:hover, .dt-chip:hover, .dt-tile:focus-visible, .dt-chip:focus-visible { z-index: 40; }
        :focus-visible { outline: 2px solid #2563eb; outline-offset: 3px; }

        .bio-full { background: #f4f9ff; }
        .ring-spin { background: conic-gradient(from 0deg, #2563eb, transparent 30%, #bfdbfe 60%, transparent 80%, #2563eb);
          animation: spin 6s linear infinite;
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px)); }
        @keyframes spin { to { transform: rotate(360deg); } }
        .pulse-dot { animation: pulse 2.4s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(59,130,246,.65); } 50% { box-shadow: 0 0 0 8px rgba(59,130,246,0); } }
        .pbtn { position: relative; overflow: hidden; background: #1d4ed8; color: #fff; border: 0; cursor: pointer; transition: box-shadow .3s; }
        .pbtn::before { content: ''; position: absolute; inset: 0; background: #10233f; transform: translateX(-101%); transition: transform .4s ease; }
        .pbtn:hover::before { transform: translateX(0); }
        .pbtn:hover { box-shadow: 0 10px 30px -8px rgba(84, 127, 221, 0.4); }
        .pbtn span { position: relative; }
        .word-mask { display: inline-block; overflow: hidden; vertical-align: top; padding-bottom: .1em; }
        .bio-left { background: linear-gradient(145deg, #0b1729 0%, #102b50 58%, #1d4ed8 120%); }
        .bio-grid { opacity: .28;
          background-image: linear-gradient(rgba(191,219,254,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(191,219,254,.16) 1px, transparent 1px);
          background-size: 56px 56px; animation: gridmove 12s linear infinite; }
        @keyframes gridmove { to { background-position: 56px 56px, 56px 56px; } }
        .bio-right-item { color: #172033; }
        .bio-full .bio-right-item:first-child { color: #36c2db; }
        .bio-close { border-color: #bfdbfe !important; color: #10233f !important; background: #fff !important; }
        .bio-close:hover { background: #10233f !important; color: #fff !important; }

        @media (max-width: 640px) {
          .dt-head { padding-top: 38px; }
          .dt-wrap { padding-left: 12px; padding-right: 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition-duration: .01ms !important; }
        }
      `}</style>

      <header className="dt-head">
        <p className="dt-intro dt-eyebrow">Our Leadership</p>
        <h1 className="dt-intro dt-title">
          People behind <span className="dt-grad">our vision.</span>
        </h1>
        <p className="dt-intro dt-hint">Hover a face to see who it is. Click to read the full bio.</p>
      </header>

      <div ref={wrapRef} className="dt-wrap">
        <div className="dt-sizer" style={{ width: W * scale, height: H * scale }}>
          <div className="dt-stage" style={{ width: W, height: H, transform: `scale(${scale})` }}>
            <svg className="dt-svg" width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
              {PATHS.map((d) => (
                <path key={d} d={d} />
              ))}
            </svg>

            {/* HUB */}
            <div className="dt-hub">
              <strong>SRIT</strong>
              <small>Leadership</small>
            </div>

            {/* TOP: Board of Directors */}
            <Box x={75} y={24} w={1130} h={64} label={grp("01").title} count={board.length}>
              {board.map((p) => (
                <Chip key={p.id} person={p} onOpen={setSelectedPerson} />
              ))}
            </Box>
            <Pill x={640} y={184}>Directors</Pill>

            {/* LEFT: Independent Directors */}
          <Box
  x={40} y={317} w={196} h={76}
  label={grp("02").title} count={independent.length}
  style={{ display: "grid", gridTemplateColumns: "repeat(3, 52px)", gap: 8 }}
>
  {independent.map((p) => (
    <Tile key={p.id} person={p} onOpen={setSelectedPerson} />
  ))}
</Box>
            <Pill x={408} y={355}>Independent Directors</Pill>

            {/* RIGHT: Strategic Partners */}
            <Box x={1044} y={317} w={196} h={76} label={grp("04").title} count={partners.length}>
              {partners.map((p) => (
                <Tile key={p.id} person={p} onOpen={setSelectedPerson} />
              ))}
            </Box>
            <Pill x={872} y={355}>Strategic Partners</Pill>

            {/* BOTTOM: Management branches */}
            <Pill x={530} y={490}>Key Manager</Pill>
            <Pill x={750} y={490}> Senior Managers</Pill>

<Box x={322} y={548} w={196} h={76} label={grp("03").title} count={kmp.length}>  {kmp.map((p) => (
    <Tile key={p.id} person={p} onOpen={setSelectedPerson} />
  ))}
</Box>

            <Box
              x={667} y={548} w={386} h={156}
              label={grp("05").title} count={leaders.length}
              style={{ display: "grid", gridTemplateColumns: "repeat(8, 40px)", gap: 6 }}
            >
              {leaders.map((p) => (
                <Tile key={p.id} person={p} size={40} onOpen={setSelectedPerson} />
              ))}
            </Box>
          </div>
        </div>
      </div>

      <BioModal person={selectedPerson} onClose={closeBio} />
    </main>
  );
}
