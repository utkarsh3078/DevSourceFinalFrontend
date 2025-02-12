export default function About() {
    return (
      <div className="bg-gray-900 text-white py-16 px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-yellow-400">About DevSource Club</h1>
          <p className="text-lg mt-6 text-gray-300">
            Welcome to <span className="text-yellow-400 font-semibold">DevSource Club</span>, a thriving community of developers under the <span className="text-yellow-400 font-semibold">USIC&T ACM Student Chapter</span>. Our mission is to <span className="text-yellow-400 font-semibold">skill up our members</span> and provide them with exposure to diverse development domains, including <span className="text-orange-400 font-semibold">web development, game development, app development, and open-source collaboration</span>.
          </p>
  
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left ">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-110 duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-orange-200">🚀 Skill Development</h2>
              <p className="text-gray-300 mt-2">
                We conduct workshops, coding sessions, and hands-on masterclasses to help members grow in different development fields.
              </p>
            </div>
  
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-110 duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-orange-200">🛠 Project-Based Learning</h2>
              <p className="text-gray-300 mt-2">
                Our club thrives on <span className="text-orange-300 font-semibold">creating new projects regularly</span>, ensuring that members always have something exciting to work on.
              </p>
            </div>
  
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-110 duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-red-400">🌍 Open Source Contribution</h2>
              <p className="text-gray-300 mt-2">
                We encourage members to contribute to open-source projects, helping them collaborate with the global developer community.
              </p>
            </div>
  
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-110 duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-red-400">🏗 Product Development</h2>
              <p className="text-gray-300 mt-2">
                Every year, we aim to <span className="text-red-400 font-semibold">publish 2 to 3 full-fledged products</span>, giving members experience in deploying, scaling, and writing production-level code.
              </p>
            </div>
          </div>
  
          <p className="text-lg mt-10 text-gray-300">
            At DevSource, we don’t just learn—we <span className="text-red-400 font-semibold">build, innovate, and grow together</span>. Whether you're a beginner or an experienced developer, if you have the passion to create, **DevSource is the place for you!**
          </p>
        </div>
      </div>
    );
  }
  