import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-10 w-10 text-primary" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-10 w-10 text-primary" />,
      skills: ["Node.js", "Express"],
    },
    {
      title: "Database",
      icon: <Database className="h-10 w-10 text-primary" />,
      skills: ["MongoDB",  "MySQL"],
    },
    
    
    {
      title: "Other",
      icon: <Globe className="h-10 w-10 text-primary" />,
      skills: ["SEO", "Performance Optimization", "Accessibility" ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with on a daily basis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

