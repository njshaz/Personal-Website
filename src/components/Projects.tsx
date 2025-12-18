import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { projects } from '../data/portfolioData';
import { useState } from 'react';

export default function Projects() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 text-white ${
            hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-dark-surface/50 backdrop-blur-sm border border-gray-border rounded-xl overflow-hidden hover:border-yellow-primary/50 transition-all duration-500 hover:transform hover:scale-[1.03] hover:shadow-lg hover:shadow-yellow-primary/10 ${
                hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Placeholder - Replace with actual images by:
                  1. Add images to public/images/projects/ directory
                  2. Add imageUrl field to Project type in src/types/index.ts
                  3. Add imageUrl to project data in src/data/portfolioData.ts
                  4. Replace this div with: <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-gray-border to-dark-surface border-b border-gray-border overflow-hidden">
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    hoveredProject === project.id
                      ? 'bg-yellow-primary/10 scale-110'
                      : 'bg-dark-surface/50'
                  }`}
                >
                  <div className="text-center p-4">
                    <div className="text-yellow-primary/30 text-4xl mb-2">📷</div>
                    <p className="text-gray-text/50 text-sm font-medium">Image Placeholder</p>
                    <p className="text-gray-text/30 text-xs mt-1">{project.title}</p>
                  </div>
                </div>
                {/* Yellow border overlay on hover */}
                <div
                  className={`absolute inset-0 border-2 border-yellow-primary transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-text mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-yellow-primary/10 text-yellow-primary text-xs font-medium rounded-full border border-yellow-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

