import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Header } from "@/components/header"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <Header />
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-primary">Hello, I'm</span>
              <br />
              <span className="text-foreground">M. Yogesh Reddy</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Computer Science Student and Aspiring Full Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              I build accessible, responsive, and performant web applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yogesh-reddy-47a425245/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:yogeshreddy9032@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1663496954351-removebg-awXWiobXRTBzNKz1vr4znj1m0o4mv3.png"
                alt="Yogesh Reddy"
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  objectPosition: "center 20%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

