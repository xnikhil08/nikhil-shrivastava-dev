const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about building innovative solutions that make a meaningful impact 
            across different industries and push the limits of software engineering complexities.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8">
              <p className="text-gray-700 mb-6">
                I'm a technical leader and software architect with proven and extensive technical expertise in 
                building scalable, secure systems across multiple industries including cybersecurity, healthcare, finance, 
                and other critical domains, giving me a unique perspective on how technology challenges and 
                solutions vary across different contexts.
              </p>
              <p className="text-gray-700 mb-6">
                As an individual contributor focused on technical excellence, I specialize in system design, 
                architecture decisions, and helping engineering teams navigate complex technical challenges. 
                I'm passionate about building systems that are not only robust and performant but also 
                maintainable and user-friendly.
              </p>
              <p className="text-gray-700">
                Beyond the technical work, I enjoy mentoring other engineers, exploring emerging technologies, 
                and thinking critically about the intersection of technology and human behavior. I occasionally 
                write about these topics and share insights from my cross-industry experience.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-blue-600 rounded-lg p-12 text-white">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-lg mb-8 text-blue-100">
              Ready to discuss technology, share ideas, or explore the future of software engineering?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/blog"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
              >
                Read My Blog
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;