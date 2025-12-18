import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 text-white ${
            hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((group, index) => (
            <div
              key={group.category}
              className={`bg-dark-bg/50 backdrop-blur-sm border border-gray-border rounded-xl p-6 lg:p-8 hover:border-yellow-primary/50 transition-all duration-300 hover:transform hover:scale-[1.02] ${
                hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-yellow-primary text-xl font-bold mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-yellow-primary/10 text-yellow-primary text-sm font-medium rounded-full border border-yellow-primary/20 hover:bg-yellow-primary/20 hover:border-yellow-primary/40 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

