export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-yellow-primary to-yellow-gold bg-clip-text text-transparent">
          Shahzaib Nadeem
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-text mb-12 font-light">
          Software & Systems Engineer
        </p>
        <p className="text-lg sm:text-xl text-gray-text/80 mb-12 max-w-2xl mx-auto">
          Computer Engineering student and technical leader passionate about embedded systems, hardware design, and mathematics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-4 bg-yellow-primary text-dark-bg font-semibold rounded-full hover:bg-yellow-gold hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-primary/20 hover:shadow-yellow-primary/40"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-4 border-2 border-yellow-primary text-yellow-primary font-semibold rounded-full hover:bg-yellow-primary hover:text-dark-bg transition-all duration-300"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

