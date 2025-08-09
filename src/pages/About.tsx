import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Project 57</title>
        <meta
          name="description"
          content="Learn about Project 57's mission to improve financial literacy through advocacy, curriculum, and enterprise partnerships."
        />
      </Helmet>

      <header className="pt-24 pb-8 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">About Project 57</h1>
          <p className="mt-2 text-gray-300 max-w-2xl">
            Empowering youth with essential financial skills through research-backed programs and policy advocacy.
          </p>
        </div>
      </header>

      <main>
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <article className="prose prose-invert max-w-none">
              <p>
                Project 57 is dedicated to closing the financial literacy gap through three pillars of work: Advocacy,
                Curriculum, and Enterprise partnerships. Our team collaborates with schools, communities, and
                policymakers to deliver measurable impact.
              </p>
              <p>
                Explore our site to learn more about our initiatives and how you can get involved.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
