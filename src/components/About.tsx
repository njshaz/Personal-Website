import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { aboutDetails } from '../data/portfolioData';

export default function About() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 text-white ${
            hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div
            className={`space-y-6 text-lg text-gray-text leading-relaxed ${
              hasIntersected ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <p>
              Computer Engineering student and technical leader passionate about embedded systems, hardware design, and mathematics. Dean's Honor Roll. Seeking grad school and hardware/software internships.
            </p>
            <p>
              Currently pursuing my B.S. in Computer Engineering with a Mathematics minor at the University of the Pacific. I have extensive experience in FPGA development, embedded systems, and digital signal processing. My academic excellence is reflected in my Dean's Honor Roll status and membership in Pi Mu Epsilon Honor Society.
            </p>
            <p>
              Through various roles from tutoring to research assistance, I've developed strong leadership skills and a passion for helping others succeed in technical fields. I'm actively seeking opportunities in graduate school and internships that will allow me to further develop my expertise in hardware and software engineering.
            </p>
          </div>

          <div
            className={`bg-dark-surface/50 backdrop-blur-sm border border-gray-border rounded-2xl p-8 space-y-6 ${
              hasIntersected ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <div>
              <div className="text-yellow-primary text-sm font-bold uppercase tracking-wider mb-2">
                Location
              </div>
              <div className="text-white text-lg">{aboutDetails.location}</div>
            </div>
            <div>
              <div className="text-yellow-primary text-sm font-bold uppercase tracking-wider mb-2">
                Email
              </div>
              <a
                href={`mailto:${aboutDetails.email}`}
                className="text-white text-lg hover:text-yellow-primary transition-colors duration-300"
              >
                {aboutDetails.email}
              </a>
            </div>
            <div>
              <div className="text-yellow-primary text-sm font-bold uppercase tracking-wider mb-2">
                LinkedIn
              </div>
              <a
                href={`https://${aboutDetails.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-yellow-primary transition-colors duration-300"
              >
                {aboutDetails.linkedin}
              </a>
            </div>
            <div>
              <div className="text-yellow-primary text-sm font-bold uppercase tracking-wider mb-2">
                Status
              </div>
              <div className="text-white text-lg">{aboutDetails.status}</div>
            </div>
            {aboutDetails.gpa && (
              <div>
                <div className="text-yellow-primary text-sm font-bold uppercase tracking-wider mb-2">
                  GPA
                </div>
                <div className="text-white text-lg">{aboutDetails.gpa}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

