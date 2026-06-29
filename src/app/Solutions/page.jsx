import "../globals.css";
import Image from "next/image";

export default function Solutions() {
  const solutions = [
    {
      title: "AI Chatbots",
      description:
        "Automate customer support with intelligent assistants available 24/7.",
      icon: (
        <img
          className="rounded-2xl"
          src="https://plus.unsplash.com/premium_photo-1725907643701-9ba38affe7bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEFydGlmaWNpYWwlMjBBbnRpbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="icon"
        />
      ),
    },
    {
      title: "Computer Vision",
      description:
        "Recognize images, detect objects, and analyze videos in real time.",
      icon: (
        <img
          className="rounded-2xl"
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlzaW9ufGVufDB8fDB8fHww"
          alt="icon"
        />
      ),
    },
    {
      title: "Predictive Analytics",
      description:
        "Use historical data to forecast future trends and improve decisions.",
      icon: (
        <img
          className="rounded-2xl"
          src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hbHl0aWNzfGVufDB8fDB8fHww"
          alt="icon"
        />
      ),
    },
    {
      title: "Natural Language Processing",
      description:
        "Analyze text, summarize documents, and understand human language.",
      icon: (
        <img
          className="rounded-2xl"
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvY2Vzc2luZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="icon"
        />
      ),
    },
    {
      title: "Voice Recognition",
      description: "Convert speech into text and build smart voice assistants.",
      icon: (
        <img
          className="rounded-2xl"
          src="https://plus.unsplash.com/premium_photo-1681487743905-d1a1881b03bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dm9pY2V8ZW58MHx8MHx8fDA%3D"
          alt="icon"
        />
      ),
    },
    {
      title: "Automation",
      description: "Reduce repetitive work by automating business processes.",
      icon: (
        <img
          className="rounded-2xl"
          src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="icon"
        />
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-6xl font-bold">
          Explore Our{" "}
          <span className="text-transparent bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text">
            AI Solutions
          </span>
        </h1>

        <p className="text-gray-600 mt-6 max-w-2xl text-lg">
          Discover cutting-edge AI technologies designed to automate businesses,
          improve productivity, and unlock innovation.
        </p>
      </section>

      {/* Cards */}

      <section className="max-w-7xl mx-auto px-8 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>
        <div className="absolute w-32 h-32 rounded-full bg-accent/20 -tp-6 -right-6 blur-xl"></div>
        <div className="absolute w-40 h-40 rounded-full bg-secondary/20 -bottom-100 -right-6 blur-2xl"></div>
        {solutions.map((item) => (
          <div
            key={item.title}
            className=" border border-gray-300 rounded-2xl hover:-translate-y-2.5 shadow-xl transition duration-300"
          >
            <div className="text-5xl text-center ">{item.icon}</div>

            <div className="p-8">
              <h2 className="text-2xl font-semibold mt-6">{item.title}</h2>

              <p className="text-gray-500 mt-4">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
