import Header from "../components/Header"
import Footer from "../components/Footer"
import { GitlabIcon as GitHub, Linkedin, Mail, Instagram } from "lucide-react"

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="container mx-auto px-4 md:px-6">
        {/* About Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
                  About Me
                </h1>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6 text-gray-500 dark:text-gray-400">
              <p className="text-lg">
                I'm Teja Kanchiapmu, a Full Stack Developer pursuing my B.Tech in Computer Science and Engineering at K L University, Guntur, AP with a CGPA of 9.4. I'm passionate about building impactful digital experiences and creating elegant solutions to complex problems.
              </p>
              <p className="text-lg">
                My journey in web development has led me to create several meaningful projects including InderVanam (an online gardening assistant), Attendance Calculator for students and faculty, and a lightweight To-Do Application for task management.
              </p>
              <p className="text-lg">
                I've also built an Employee Management System, Job Portal, Music Streaming Platform, and Ticket Booking System. My technical skills include JavaScript, TypeScript, C, Java, React.js, Next.js, HTML, Node.js, Express.js, Spring Boot, MySQL, and MongoDB.
              </p>
              <p className="text-lg">
                I believe in clean code, user-centered design, and continuous learning. I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just chat about technology.
              </p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
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
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About