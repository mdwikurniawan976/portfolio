"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import { BiLinkExternal } from 'react-icons/bi';
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: 'Ezy Kasir',
    description: 'A cashier app for managing sales, inventory, and daily reports efficiently.',
    image: '/images/projects/ezykasir.jpg',
    github: 'https://github.com/mdwikurniawan/ezy-kasir',
    tech: ['Kotlin', 'C#', 'SQLite'],
  },
  {
    title: 'Company Profile',
    description: 'A company site for promoting modern agricultural solutions.',
    image: '/images/projects/innovatek.png',
    demo: 'https://innovatek.vercel.app/',
    github: 'https://github.com/mdwikurniawan/portfolio',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'RanggaKocomoto',
    description: 'Optical shop POS system with inventory and transaction tracking.',
    image: '/images/projects/ranggakocomoto.png',
    // demo: '#',
    github: 'https://github.com/mdwikurniawan/inventory-system',
    tech: ['C#', '.NET Framework', 'Microsoft Access (.accdb)'],
  },
  {
    title: 'Ezemkofi',
    description: 'Coffee shop Android app with product browsing, auth, and checkout.',
    image: '/images/projects/ezemkofi.png',
    // demo: '#',
    github: 'https://github.com/mdwikurniawan/todo-app',
    tech: ['Kotlin', 'SQL Server', 'REST API'],
  },
  {
    title: 'Aplikasi Pendataan Nilai',
    description: 'A Laravel web app for managing student grades and academic data.',
    image: '/images/projects/apknilai.png',
    // demo: '#',
    github: 'https://github.com/mdwikurniawan/laravel-blog',
    tech: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    title: 'Startup Landing Page',
    description: 'Landing page for showcasing web, mobile, and desktop services.',
    image: '/images/projects/devnusa.png',
    demo: 'https://devnusa.vercel.app/',
    github: 'https://github.com/mdwikurniawan/api-integration-demo',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'EsemkaGym',
    description: 'Mobile app for managing gym members, check-ins, and capacity.',
    image: '/images/projects/esemkagym.png',
    // demo: '#',
    github: 'https://github.com/mdwikurniawan/extra-project',
    tech: ['Kotlin', 'API'],
  },
  {
    title: 'BromoAirlines',
    description: 'Desktop app for managing flight bookings. Admins handle airlines, airports, schedules, and promo codes; customers can search and book flights.',
    image: '/images/projects/bromo.png',
    // demo: '#', // Replace if demo available
    github: 'https://github.com/mdwikurniawan/extra-project',
    tech: ['C#', '.NET', 'WinForms/WPF', 'SQL Server', 'Entity Framework']
  },
  {
    title: 'QuizinAja',
    description: 'Desktop quiz app for creating, joining, and analyzing quiz results.',
    image: '/images/projects/quiz.png',
    // demo: '#',
    github: 'https://github.com/mdwikurniawan/extra-project',
    tech: ['C#', '.NET', 'WinForms/WPF', 'SQL Server', 'Entity Framework']
  },
  {
    title: 'EsemkaRecipes',
    description: 'Mobile recipe app with 1000+ dishes connected to backend API.',
    image: '/images/projects/esemkarecipes.png',
    github: 'https://github.com/mdwikurniawan/extra-project',
    tech: ['Kotlin', 'Android Studio', 'REST API']
  },
  {
    title: 'Esemka Foodcourt',
    description: 'Desktop reservation app for foodcourt with full-day booking system.',
    image: '/images/projects/esemkafoodcurt.png',
    github: 'https://github.com/mdwikurniawan/extra-project',
    tech: ['C#', '.NET', 'WinForms/WPF', 'SQL Server', 'Entity Framework']
  },
  {
    title: 'Lelah-o-Meter',
    description: 'Health tracker app with fatigue input, health logs, and PDF export.',
    image: '/images/projects/lelah.png',
    // demo: '#',
    github: 'https://github.com/mdwikurniawan/extra-project',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'TCPDF']
  }
];

type Certificate = {
  title: string;
  description: string;
  image: string;
  issuer: string;
  year: string;
};

const certificates = [
  {
    title: 'Gold Medal – National Student Science Olympiad (OSSN) 2024',
    description: 'Won the Gold Medal (A+ grade) in the Informatics category at the 2024 National Student Science Olympiad (OSSN), held on June 30, 2024, in Yogyakarta.',
    image: '/images/certificate/goldmedal.png',
    issuer: 'Pusat Kejuaraan Sains Nasional (Puskanas.id)',
    year: '2024',
  },
  {
    title: 'Web Design Competency Certification – Level IV (IQF)',
    description: 'Declared competent in the field of Web Design Level IV (KKNI) by the Competency Certification Board of Information and Communication Technologies. Certification issued on May 26th, 2025.',
    image: '/images/certificate/kompeten.jpg',
    issuer: 'Competency Certification Board of ICT (LSP TIK)',
    year: '2025',
  },
  {
    title: '7th Place – IT Software Solution for Business (LKS East Java Province)',
    description: 'Achieved 7th place among 32 participants in the provincial-level Student Skills Competition (LKS) 2024 for IT Software Solution for Business representing Pasuruan District.',
    image: '/images/certificate/lksprovinsi.jpg',
    issuer: 'East Java Provincial Department of Education (Dinas Pendidikan Provinsi Jawa Timur)',
    year: '2024',
  },
  {
    title: '1st Place – IT Software Solution for Business (LKS Pasuruan)',
    description: 'Achieved 1st place in the Student Skills Competition (LKS) for IT Software Solution for Business at the Pasuruan Regency level in 2024, organized by the East Java Provincial Education Office.',
    image: '/images/certificate/juara1.png',
    issuer: 'Department of Education, Pasuruan District, East Java',
    year: '2024',
  },
  {
    title: '2nd Best Academic Graduate – SMKN 1 BANGIL',
    description: 'Ranked second among all 12th-grade students based on cumulative academic performance throughout the school years.',
    image: '/images/certificate/peringkat2.jpg',
    issuer: 'SMKN 1 BANGIL',
    year: '2025',
  },
  {
    title: 'Best Graduate in Software Engineering – SMKN 1 BANGIL',
    description: 'Certificate of achievement awarded to the Best Graduate in the Software Engineering major, for outstanding academic performance and excellence during the academic year 2024/2025.',
    image: '/images/certificate/lulusanterbaik.jpg',
    issuer: 'SMKN 1 BANGIL',
    year: '2025',
  },
  {
    title: 'TEKNOVISTAFEST 2024 – Web Design Competition',
    description: 'Selected as one of the Top 10 Finalists in the Web Design Competition held by the Faculty of Vocational Studies, Universitas Airlangga. Official certificate issued as a participant.',
    image: '/images/certificate/finalis.jpg',
    issuer: 'Universitas Airlangga',
    year: '2024',
  },
  {
    title: 'WorldSkills ASEAN 2025 – Regional Selection Participant',
    description: 'Selected as a participant in the 2024 regional online selection for the 14th WorldSkills ASEAN Competition in the IT Software Solutions for Business category, organized by the Ministry of Manpower of Indonesia (Kemnaker).',
    image: '/images/certificate/selekda.png',
    issuer: 'Ministry of Manpower, Republic of Indonesia (Kemnaker)',
    year: '2024',
  },
  {
    title: 'National Certification Training – Software Engineering & Web Design',
    description: 'Participated in the national-level training and competency certification program (KKNI-based) in software engineering and web design, organized by the East Java Provincial Department of Education.',
    image: '/images/certificate/inkubator2.jpg',
    issuer: 'East Java Provincial Department of Education (Dinas Pendidikan Provinsi Jawa Timur)',
    year: '2025',
  },
  {
    title: 'Software Engineering & Web Design Incubator Program',
    description: 'Participated in the national incubator program to develop and enhance vocational competencies in software engineering and web design.',
    image: '/images/certificate/inkubator.png',
    issuer: 'East Java Provincial Department of Education (Dinas Pendidikan Provinsi Jawa Timur)',
    year: '2024',
  },
  {
    title: 'Junior Programmer Credential',
    description: 'Received a Microcredential Certificate for successfully completing the Junior Programmer occupational competency, including structured programming, debugging, documentation, and unit testing, awarded by SMKN 1 Bangil.',
    image: '/images/certificate/junior.jpg',
    issuer: 'SMKN 1 Bangil',
    year: '2025',
  },
  {
    title: 'Assistant Junior Programmer Credential',
    description: 'Awarded a Microcredential Certificate for Assistant Junior Programmer, recognizing foundational skills in using programming specifications, applying coding principles, and supporting software development tasks.',
    image: '/images/certificate/asistenjunior.jpg',
    issuer: 'SMKN 1 Bangil',
    year: '2025',
  },
  {
    title: 'Bootcamp LKS SMK 2024 – UBIG Batch 2',
    description: 'Participated in the second batch of the LKS SMK 2024 Bootcamp organized by PT Universal Big Data (UBIG), focusing on advanced technical training in IT Software Solutions for Business.',
    image: '/images/certificate/bootcamp2.png',
    issuer: 'PT Universal Big Data (UBIG)',
    year: '2024',
  },
  {
    title: 'Bootcamp LKS SMK 2024 – Universal Big Data',
    description: 'Completed the LKS SMK 2024 Bootcamp held by PT Universal Big Data (UBIG) from December 18, 2023 to January 12, 2024 with a “Good” performance rating.',
    image: '/images/certificate/bootcamp.png',
    issuer: 'PT Universal Big Data (UBIG)',
    year: '2024',
  },
  {
    title: 'Internship – PT. Semarsoft Technology Indonesia',
    description: 'Completed an industry internship (PKL) at PT. Semarsoft Technology Indonesia from January 2, 2024 to June 30, 2024 with an “Excellent” performance rating.',
    image: '/images/certificate/magang.png',
    issuer: 'PT. Semarsoft Technology Indonesia',
    year: '2024',
  },
  {
    title: 'National Science Olympiad – Informatics (OSSN 2024)',
    description: 'Actively participated in the National Science Olympiad (OSSN) in the field of Informatics, held on June 30, 2024, in Yogyakarta. Organized by the National Science Championship Center (Puskanas.id) under the supervision of the Berlian Hati Mulia Foundation.',
    image: '/images/certificate/aktif.png',
    issuer: 'National Science Championship Center (Puskanas.id)',
    year: '2024',
  },
  {
    title: 'Smart Inotek 2023 Web Design Participant',
    description: 'Participated in the SMART INOTEK 2023 web design competition with the theme "Artificial Intelligence: New Era of Technology in Society 5.0", organized by the D3 Informatics Engineering Program of Vocational School, Universitas Sebelas Maret (Madiun).',
    image: '/images/certificate/inotek2023.jpg',
    issuer: 'Universitas Sebelas Maret (Madiun)',
    year: '2023',
  }

];
export default function Home() {

const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);


  return (
    <>

      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      >


        <div className="relative z-10 mt-[-180px]">

          {/* Hi, I'm */}
          <motion.h2
            className="text-3xl md:text-5xl font-semibold mb-2 text-white drop-shadow-[0_0_20px_rgba(139,92,246,1)] drop-shadow-[0_0_40px_rgba(139,92,246,0.8)] drop-shadow-[0_0_60px_rgba(139,92,246,0.6)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I&apos;m
          </motion.h2>

          {/* Typewriter */}
          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-4  w-[660px] md:w-[800px]  bg-gradient-to-r from-[#6A5ACD] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(139,92,246,1)] drop-shadow-[0_0_50px_rgba(139,92,246,0.8)] drop-shadow-[0_0_80px_rgba(139,92,246,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block">
              <Typewriter
                words={['M. Dwi Kurniawan', 'A Junior Developer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="max-w-xl mx-auto text-center text-gray-300 text-[11px] md:text-base mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I excel at crafting elegant digital experiences and <br />
            I am proficient in various programming languages and technologies.
          </motion.p>

          {/* Buttons & Icons */}
          <motion.div
            className="flex items-center gap-4 flex-wrap justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="/cv.pdf"
              download
              className="border border-[#8B5CF6] px-4 py-2 rounded-full text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-all flex items-center gap-2 text-sm font-medium"
            >
              Download CV <FiDownload />
            </a>

            <a
              href="https://github.com/mdwikurniawan976"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5CF6] hover:text-[#E0E0FF] border border-[#8B5CF6] w-10 h-10 flex items-center justify-center rounded-full transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/mdw.krnwn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5CF6] hover:text-[#E0E0FF] border border-[#8B5CF6] w-10 h-10 flex items-center justify-center rounded-full transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/m-dwi-kurniawan-1bb0a2292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5CF6] hover:text-[#E0E0FF] border border-[#8B5CF6] w-10 h-10 flex items-center justify-center rounded-full transition"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

      </section>

      {/* <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      > */}
      <section
        id="about"
        className="px-4 py-20 md:py-28 min-h-screen flex items-center scroll-mt-[50px] overflow-hidden"
      >
        {/* Background Glow Dekoratif */}
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8">

          {/* Judul */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-left lg:-ml-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            About <span className="text-[#8B5CF6]">Me</span>
          </motion.h2>

          {/* Grid konten */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start">

            {/* Gambar kiri */}
            <motion.div
              className="flex justify-start lg:-ml-20 mt-10 lg:mt-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <Image
                src="/images/icons/about.png"
                alt="Ilustrasi Tentang Saya"
                width={400}
                height={400}
                className="object-contain"
              />
            </motion.div>

            {/* Teks kanan */}
            <motion.div
              className="text-start mt-6 lg:mt-7 lg:-ml-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <p className="text-sm md:text-base leading-relaxed mb-6 text-gray-300">
                I&apos;m M. Dwi Kurniawan, a top Software Engineering graduate and 2nd in my class of 2024/2025.
                Accepted into the D4 Informatics Engineering program at Politeknik Negeri Malang.
                LKS district champion and provincial top 7 in IT Software Solutions for Business.
                Certified in Web Design (KKNI Level 4) and experienced in mobile, desktop, and web app development.
                Passionate about building impactful tech and starting my own digital startup.
              </p>

              <motion.a
                href="#contact"
                className="inline-block bg-[#8B5CF6] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#7c3aed] transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: false }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="px-4 py-20 md:py-28 min-h-screen flex items-center scroll-mt-[50px]"
      >

        <div className="max-w-6xl mx-auto w-full">

          {/* Heading */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            My <span className="text-[#8B5CF6]">Skills</span>
            <div className="mt-2 mx-auto w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-indigo-400 rounded-full"></div>
          </motion.h2>

          <motion.p
            className="text-sm md:text-base text-center text-gray-300 mt-4 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Proficient in web, mobile, and desktop application development using modern technologies, <br />
            frameworks, and tools for business solutions and system integration.
          </motion.p>

          {/* Skill cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "/images/icons/web.png",
                title: "Frontend Development",
                desc: "HTML, CSS, JavaScript, Next.js, React.js, Tailwind CSS, Bootstrap",
              },
              {
                icon: "/images/icons/bigdata.png",
                title: "Backend Development",
                desc: "Laravel (PHP), ASP.NET Core, MySQL, API Integration",
              },
              {
                icon: "/images/icons/mobile.png",
                title: "Mobile Development",
                desc: "Kotlin, XML, SQLite, API Integration",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1A1A2E] p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <Image src={item.icon} alt={item.title} width={70} height={70} className="mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 2 Kolom Tengah & Center */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
            {[
              {
                icon: "/images/icons/monitor.png",
                title: "Dekstop Development",
                desc: "C#, .NET Framework, Entity Framework, SQL Server, Microsoft Access (.accdb)",
              },
              {
                icon: "/images/icons/tools.png",
                title: "Tools & Others",
                desc: "Visual Studio, VS Code, Android Studio, SSMS, Postman, Git, GitHub",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1A1A2E] p-6 rounded-xl shadow-md w-full sm:w-[400px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                viewport={{ once: false }}
              >
                <Image src={item.icon} alt={item.title} width={70} height={70} className="mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="px-4 py-20 md:py-28 min-h-screen flex items-center scroll-mt-[50px]"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
            Featured <span className="text-[#8B5CF6]">Projects</span>
            <div className="mt-2 mx-auto w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-indigo-400 rounded-full"></div>
          </h2>
          <p className="text-sm md:text-base text-center text-gray-300 mt-4 mb-10 leading-relaxed">
            Here are some of my recent projects that showcase <br /> my skills and
            problem-solving abilities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#1A1A2E] p-4 rounded-xl shadow-md cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                  ease: "easeInOut",
                  scale: { delay: 0.05 }
                }}
                viewport={{ once: false, amount: 0.3 }} 
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-md mb-4 object-cover w-full h-[200px]"
                  />
                ) : (
                  <div className="rounded-md mb-4 w-full h-[200px] flex items-center justify-center bg-gradient-to-br from-[#1F1F3A] to-[#2D2D44] text-white text-center text-base font-semibold">
                    {project.title}
                  </div>
                )}

                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#2D2D44] text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-[#8B5CF6] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLinkExternal className="text-base" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-gray-300 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-base" />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {projects.length > 6 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-[#8B5CF6] text-white px-6 py-2 rounded-md hover:bg-[#7C3AED] transition"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </section>

      <section
        id="certificate"
        className="px-4 py-20 md:py-28 min-h-screen flex items-center scroll-mt-[50px]"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            Achievement & <span className="text-[#8B5CF6]">Certifications</span>
            <div className="mt-2 mx-auto w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-indigo-400 rounded-full"></div>
          </motion.h2>

          <motion.p
            className="text-sm md:text-base text-center text-gray-300 mt-4 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Recognitions and certifications that reflect my commitment to excellence <br /> in software development and IT solutions.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllCertificates ? certificates : certificates.slice(0, 6)).map((cert, index) => (
              <motion.div
                key={index}
                className="bg-[#1A1A2E] p-4 rounded-xl shadow-md cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{
                  delay: index * 0.05, // delay masuk saat scroll
                  duration: 0.3,
                  ease: "easeInOut",
                  scale: { delay: 0.05 }, // delay hover 0.05 detik
                }}
                viewport={{ once: false }}
                onClick={() => setSelectedCert(cert)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={500}
                  height={300}
                  className="rounded-md mb-4 object-contain w-full h-[200px] bg-[#0f0f1a]"
                />
                <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{cert.description}</p>
                <div className="text-xs text-gray-400">
                  <span className="block">
                    Issuer: <span className="text-white">{cert.issuer}</span>
                  </span>
                  <span className="block">
                    Year: <span className="text-white">{cert.year}</span>
                  </span>
                </div>
              </motion.div>

            ))}
          </div>

          {certificates.length > 6 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllCertificates(!showAllCertificates)}
                className="bg-[#8B5CF6] text-white px-6 py-2 rounded-md hover:bg-[#7C3AED] transition"
              >
                {showAllCertificates ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}

          {/* Modal animasi */}
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
                onClick={() => setSelectedCert(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-[#1A1A2E] rounded-lg w-full max-w-2xl relative shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-3 right-3 text-white text-2xl hover:text-[#8B5CF6] transition z-10"
                  >
                    &times;
                  </button>

                  <div className="p-4 pt-10">
                    <div className="relative w-full aspect-video bg-[#0f0f1a] rounded-md overflow-hidden">
                      <Image
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {selectedCert.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-2">{selectedCert.description}</p>
                      <div className="text-xs text-gray-400">
                        <span className="block">
                          Issuer: <span className="text-white">{selectedCert.issuer}</span>
                        </span>
                        <span className="block">
                          Year: <span className="text-white">{selectedCert.year}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section
        id="contact"
        className="px-4 py-20 md:py-28 min-h-screen flex items-center scroll-mt-[50px]"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
          Let&apos;s  <span className="text-[#8B5CF6]">Connect</span>
            <div className="mt-2 mx-auto w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-indigo-400 rounded-full"></div>
          </motion.h2>

          <motion.p
            className="text-sm md:text-base text-gray-300 mt-4 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Have a project in mind or just want to say hello? Feel free to reach out through the form below or via my social media.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent (mockup)");
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#1A1A2E] text-white border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#1A1A2E] text-white border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#1A1A2E] text-white border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              required
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-[#1A1A2E] text-white border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              required
            />
            <button
              type="submit"
              className="bg-[#8B5CF6] text-white px-8 py-3 rounded-md hover:bg-[#7C3AED] transition font-semibold"
            >
              Send Message
            </button>
          </motion.form>

          {/* Optional: Social media icons */}
          <div className="flex justify-center mt-10 space-x-6">
            <a
              href="mailto:mdwikurniawan976@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5CF6] hover:text-[#E0E0FF] border border-[#8B5CF6] w-10 h-10 flex items-center justify-center rounded-full transition"
            >
              <FaEnvelope />
            </a>


            <a
              href="https://instagram.com/mdw.krnwn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5CF6] hover:text-[#E0E0FF] border border-[#8B5CF6] w-10 h-10 flex items-center justify-center rounded-full transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/m-dwi-kurniawan-1bb0a2292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5CF6] hover:text-[#E0E0FF] border border-[#8B5CF6] w-10 h-10 flex items-center justify-center rounded-full transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F0F1A] text-[#E0E0FF] py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand / Nama */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#8B5CF6]">M. Dwi Kurniawan</h3>
            <p className="text-base text-gray-400 mt-2">Junior Developer & Software Engineer</p>
          </div>

          {/* Navigation / Quick Links */}
          <div className="flex flex-col md:flex-row items-center gap-5">
            <a href="#home" className="hover:text-[#8B5CF6] transition text-lg">Home</a>
            <a href="#about" className="hover:text-[#8B5CF6] transition text-lg">About</a>
            <a href="#skills" className="hover:text-[#8B5CF6] transition text-lg">Skills</a>
            <a href="#projects" className="hover:text-[#8B5CF6] transition text-lg">Projects</a>
            <a href="#contact" className="hover:text-[#8B5CF6] transition text-lg">Contact</a>
          </div>

          {/* Social Media */}
          <div className="flex gap-5">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:text-white transition text-2xl">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:text-white transition text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:text-white transition text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} M. Dwi Kurniawan. All rights reserved.
        </div>
      </footer>


    </>
  );
}
