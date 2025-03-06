import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">
            <span className="text-primary">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
          <p className="text-muted-foreground mt-6">
            I'm a passionate Full Stack Developer with expertise in JavaScript, React, and modern web technologies.  
            I enjoy solving complex problems and creating user-friendly applications that make an impact.
          </p>
          <p className="text-muted-foreground mt-4">
            Over the years, I have participated in multiple hackathons and innovation challenges, gaining hands-on 
            experience in developing creative solutions.
          </p>
          <p className="text-muted-foreground mt-4">
            When I'm not coding, you'll find me exploring new technologies, reading, or working on exciting projects.
          </p>

          {/* Resume Download Button */}
          <div className="mt-6">
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download="M_YOGESH_REDDY_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
