import "../globals.css";

export default function LearnMore() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-y-20 gap-x-60  items-center">
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            Artificial Intelligence is
            <span className=" block gradient-text">Changing Everything</span>
          </h1>

          <p className="text-gray-600 mt-8 text-lg">
            Artificial Intelligence is transforming industries worldwide. From
            healthcare and finance to education and transportation, AI helps
            businesses solve complex problems faster than ever.
          </p>

          <div className="mt-10">
            <a className="btn-primary " href="/Home">
              Explore Technologies
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
            className="rounded-3xl shadow-xl"
            height="800px"
            width="500px"
          />
        </div>
      </section>

      {/* Statistics */}

      <section className="bg-violet-50 py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold text-secondary">95%</h2>
            <p className="mt-3 text-gray-500">Faster Automation</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-secondary">300+</h2>
            <p className="mt-3 text-gray-500">AI Projects</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-secondary">50+</h2>
            <p className="mt-3 text-gray-500">Countries Served</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-secondary">24/7</h2>
            <p className="mt-3 text-gray-500">AI Assistance</p>
          </div>
        </div>
      </section>

      {/* Why AI */}

      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center">
          Why Businesses Choose AI
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="border text-secondary rounded-2xl p-8">
            <h3 className="text-2xl font-semibold">Faster Decisions</h3>

            <p className="mt-4 text-gray-500">
              Analyze millions of data points instantly.
            </p>
          </div>

          <div className="border text-secondary rounded-2xl p-8">
            <h3 className="text-2xl font-semibold">Secure Systems</h3>

            <p className="mt-4 text-gray-500">
              AI detects threats before they become problems.
            </p>
          </div>

          <div className="border text-secondary rounded-2xl p-8">
            <h3 className="text-2xl font-semibold">Innovation</h3>

            <p className="mt-4 text-gray-500">
              Build smarter products powered by machine learning.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
