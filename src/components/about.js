"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="bg-gray-900 text-white py-16 px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-2xl md:text-5xl font-bold text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About DevSource Club
        </motion.h1>
        <motion.p
          className="text-lg mt-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Welcome to{" "}
          <span className="text-yellow-400 font-semibold">DevSource Club</span>, a thriving
          community of developers under the{" "}
          <span className="text-yellow-400 font-semibold">USIC&T ACM Student Chapter</span>. Our
          mission is to{" "}
          <span className="text-yellow-400 font-semibold">skill up our members</span> and provide
          them with exposure to diverse development domains, including{" "}
          <span className="text-orange-400 font-semibold">
            web development, game development, app development, and open-source collaboration
          </span>.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            {
              title: "🚀 Skill Development",
              desc: "We conduct workshops, coding sessions, and hands-on masterclasses to help members grow in different development fields.",
              color: "text-orange-200",
            },
            {
              title: "🛠 Project-Based Learning",
              desc: "Our club thrives on creating new projects regularly, ensuring that members always have something exciting to work on.",
              color: "text-orange-300",
            },
            {
              title: "🌍 Open Source Contribution",
              desc: "We encourage members to contribute to open-source projects, helping them collaborate with the global developer community.",
              color: "text-red-400",
            },
            {
              title: "🏗 Product Development",
              desc: "Every year, we aim to publish 2 to 3 full-fledged products, giving members experience in deploying, scaling, and writing production-level code.",
              color: "text-red-400",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-110 duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className={`text-2xl font-semibold ${item.color}`}>{item.title}</h2>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-lg mt-10 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          At DevSource, we don’t just learn—we{" "}
          <span className="text-red-400 font-semibold">build, innovate, and grow together</span>.
          Whether you're a beginner or an experienced developer, if you have the passion to create,{" "}
          <span className="text-yellow-400 font-semibold">DevSource is the place for you!</span>
        </motion.p>
      </div>
    </motion.div>
  );
}
