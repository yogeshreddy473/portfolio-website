"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email",
      content: "yogeshreddy473@gmail.com",
      link: "mailto:yogeshreddy473@gmail.com",
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "Phone",
      content: "+91 9059947949",
      link: "tel:+91 9059947949",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or want to work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {info.content}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

