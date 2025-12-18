import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 text-white ${
            hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className={`bg-dark-bg/50 backdrop-blur-sm border border-gray-border rounded-xl p-6 lg:p-8 hover:border-yellow-primary/50 transition-all duration-300 hover:transform hover:scale-[1.02] ${
                hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <div className="text-yellow-primary text-lg font-semibold mb-1">{item.company}</div>
              <div className="text-gray-text text-sm mb-4">{item.duration}</div>
              <p className="text-gray-text leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

