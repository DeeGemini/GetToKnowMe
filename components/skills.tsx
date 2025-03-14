import React from "react"
import { SiIrobot, SiPython, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiPostman, SiHtml5, SiCss3 } from "react-icons/si"

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Postman", icon: SiPostman },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Applied AI", icon: SiIrobot },
  { name: "Python", icon: SiPython },
]

const Skills = () => {
  return (
    <section className="glass py-20 rounded-lg shadow-lg mx-4 my-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <skill.icon className="w-16 h-16 mb-2" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
