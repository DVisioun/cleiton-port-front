import React from 'react'

function TextSkills() {
  const skills = [
    '3D Modeling',
    'Character Modeling',
    'Digital Sculpting',
    'Game Design',
    'Assets',
  ]

  return (
    <div className="flex flex-wrap justify-center gap-3 py-14">
      {skills.map((skill, index) => (
        <React.Fragment key={index}>
          <p className="text-xl sm-1:text-lg">{skill}</p>
          {index !== skills.length - 1 && <span className="text-2xl">-</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

export default TextSkills
