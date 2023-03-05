import React from 'react'

const skills = [
  {skill: "HTML"},
  {skill: "CSS"},
  {skill: "JavaScript"},
  {skill: "Dart"},
  {skill: "Flutter"},
  {skill: "Python"},
  {skill: "Next.js"},
  {skill: "Git"},
  {skill: "Github"},
  {skill: "PHP"},
  {skill: "Tailwind CSS"},
  {skill: "Bootstrap"},
  {skill: "Laravel"},
  {skill: "TypeScript"},
  {skill: "React.js"},
  {skill: "SQL"},
  {skill: "Java"},
  {skill: "Vercel"},
  {skill: "Tableau"},
]

const AboutSection = () => {
  return (
    <section className='lg:h-screen' id='about'>
        <div className="my-2 pb-12">
            <div>
            <h1 className="text-white text-center font-bold text-4xl">
              About Me
              <hr className="w-6 h-1 mx-auto my-2 bg-yellow-700 border-0 rounded"/>
            </h1>
            </div>
            <div className='flex flex-col space-y-10 align-top justify-center items-stretch md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className="md:w-3/5">
                    <h1 className='text-white font-bold text-center md:text-left mb-3'>Get to know me!</h1>
                    <p className='text-white'>
                      {" "}
                      <span className='font-bold text-pink-600'>Kumusta?</span> My name is John Rimuel and I am a{" "}
                      <span className='font-bold'>{"highly ambitious"}</span>,
                      <span className='font-bold'>{" self-motivated"}</span>, and
                      <span className='font-bold'>{" driven"}</span> associate software engineer based in Manila, Philippines.
                    </p>
                    <br />
                    <p className='text-white'>
                      I graduated from Dalubhasaan ng Lungsod ng Lucena, Quezon Province in 2022 with a BS in Information Technology and have been workinig in the field back then.
                    </p>
                    <br />
                    <p className='text-white'>
                      I have a wide range of hobbies and passions that keep me busy. From playing computer and mobile games, playing sports, making song covers, to making Youtube videos. I always seek new experiences and love to keep my self engaged and learning new things.
                    </p>
                    <br />
                    <p className='text-white'>
                      I believe that you should{" "}
                      <span className='font-bold text-pink-600'>
                        never stop growing
                      </span>{" "}
                      and that&#39;s what I strive to do. I have a passion for technology and desire to always push the limits of what&#39;s possible. I am excited to see where my career take me and always open to new opportunities. 😊
                    </p>
                </div>
                <div className="md:w-2/5">
                  <h1 className="text-white font-bold text-center md:text-left mb-3">My Skills</h1>
                  <div className="flex flex-wrap flex-row justify-center md:justify-start">
                    {skills.map((item, index) => {
                      return <p key={index} className="bg-gray-700 px-4 py-2 mt-2 mr-2 text-gray-200 font-semibold rounded">{item.skill}</p>
                    })}
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection