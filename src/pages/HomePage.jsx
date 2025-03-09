import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard"
import TechStack from "../components/TechStack"
import ContactForm from "../components/ContactForm"
import { GitlabIcon as GitHub, Linkedin, Mail, Instagram } from "lucide-react"

function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="container mx-auto px-4 md:px-6">
{/* Hero Section */}
<section id="about" className="py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6 mx-auto">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
          Full Stack Developer
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Building digital experiences with modern technologies. Focused on creating elegant solutions to
          complex problems.
        </p>
      </div>
      <div className="space-x-4">
        <a
          href="https://github.com/Tejahaha"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <GitHub className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/k-teja-52b142325/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/not_.teja/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Instagram className="h-4 w-4" />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="mailto:2300033461csehte@gmail.com"
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Mail className="h-4 w-4" />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </div>
  </div>
</section>


{/* Projects Section */}
<section id="projects" className="py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6 mx-auto">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-white">
      Projects
    </h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  <ProjectCard
    title="TuneUp"
    description="A music streaming application built with Vite, Spring Boot, and MySQL."
    folder="TuneUp"
    link="https://github.com/Tejahaha/TuneUp-frontEnd.git"
    tags={["Vite", "Spring Boot", "MySQL"]}
  />
  <ProjectCard
    title="TejaBaba"
    description="A frontend-only e-commerce app built with Vite."
    folder="TejaBaba"
    link="https://github.com/Tejahaha/TejaBaba-FE.git"
    tags={["Vite"]}
  />
  <ProjectCard
    title="VoterSystem"
    description="A voter management system using Vite, Spring Boot, and MySQL."
    folder="VoterSystem"
    link="https://github.com/Tejahaha/Voter.git"
    tags={["Vite", "Spring Boot", "MySQL"]}
  />
</div>

  </div>
</section>


        {/* Tech Stack Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-white">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-white">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage

