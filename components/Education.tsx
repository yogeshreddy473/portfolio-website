export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Education Details */}
          <div className="border border-border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Bachelor of Engineering in Computer Science & Engineering</h3>
            <p className="text-muted-foreground">Study World College of Engineering (2021 - 2025)</p>
          </div>

          {/* Certifications */}
          <div className="border border-border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Certifications</h3>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
              <li>Certified in Manipal National Level Hackathon (2022)</li>
              <li>Certified in Accenture Innovation Challenge (2023)</li>
              <li>Certified in Tata Imagination Challenge (2023)</li>
            </ul>
          </div>

          {/* Key Achievements */}
          <div className="border border-border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Key Achievements</h3>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
              <li>Smart India Hackathon 2021: Submitted an innovative idea and placed 2nd in the finals.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

