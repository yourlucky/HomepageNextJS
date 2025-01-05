'use client';

import './resume.css';
import Link from 'next/link';
import ResumeBox from './ResumeBox';
import EducationBox from './EducationBox';
import VisitTracker from '../_component/VisitTracker';

export default function Resume() {
  const experiences = [
    {
      period: '2023 - Present',
      position: 'Software Engineer',
      company: 'SK Ecoplant Americas',
      location: 'Irvine, CA',
      logoSrc: '/SK_logo.png',
      description: `As a Software Engineer at Sk Ecoplant, I have developed a variety of
            projects including a comprehensive Invoice Portal and a conference
            room booking system. My responsibilities ranged from designing and
            implementing the entire process for the Invoice Portal—from
            front-end to back-end and AWS deployment—to ensuring its seamless
            functionality.`,
    },
    {
      period: '2021 - 2022',
      position: 'Software Developer',
      company: 'UW-Madison, BuckyBots',
      location: 'Madison, WI',
      logoSrc: '/Bucky.png',
      description: `In my role as a founding member of the Buckybots team, 
      I tackled everything from basic network setups to creating simulations for robot training and programming robots in C++ from scratch. This initiative, part of my master's degree, 
      led to our third-place victory at the Robocup France League 2022. Working with numerous undergraduates, I also developed my leadership skills, 
      steering our team through complex technical challenges in a collaborative environment.`,
    },
  ];
  const education = [
    {
      period: '2023 - Present',
      school: 'Stony Brook University',
      major: 'MS Computer Science',
      advisor: 'Advisor : Prof.Josiah Hanna',
      location: 'Madison, WI',
      description: `In my first year, I solidified my understanding of the fundamentals of computer science, 
        and in the second year, I focused on reinforcement learning under the guidance of Professor Josiah. 
        I am always grateful for the wonderful opportunities I have received.`,
    },
    {
      period: '2012 - 2013',
      school: 'Stony Brook University',
      major: 'BS Applied Mathematics & Statistics',
      advisor: ' ',
      location: 'StonyBrook, NY',
      description: `I was selected for a dual degree program at Ajou University in Korea, 
      which allowed me to study in the United States. 
      Applied Mathematics/Statistics, my favorite subjects, led me to graduate with the highest distinction, Summa Cum Laude.`,
    },
  ];
  return (
    <div className='w-full max-w-[800px] mx-auto'>
      <div className=''>
        <VisitTracker />
        <div className='flex items-center justify-center font-bold text-xxl pt-12 pb-10'>
          <div className='w-5 h-5 bg-[blue] mr-3'></div>Resume
        </div>
        <div className='flex items-center justify-between mx-auto px-2 pb-8 text-xl font-bold'>
          <div className='flex-1'>Work Experience</div>
          <div className='flex gap-3'>
            <Link href='/projects/ai'>
              <button className='button-rs' role='button'>
                {' '}
                View Projects
              </button>
            </Link>
            <Link href='https://drive.google.com/file/d/1mSFUG2RgQpP-snvMgJF3AdWCLe6T7-XE/view'>
              <button className='button-rs button-rs-pdf'>PDF Download</button>
            </Link>
          </div>
        </div>
        {experiences.map((experienceObj, index) => (
          <div key={index} className='mb-10'>
            <ResumeBox {...experienceObj} />
          </div>
        ))}

        <div className='p-5'></div>

        <div className='flex bg-white justify-between mx-auto px-10 py-5 text-plus'>
          <div>
            <div className='text-xl font-bold py-3'>Technical Skills</div>
            <div className='flex items-center p-2'>
              <div className='w-2 h-2 bg-[blue] mr-3 flex-shrink-0'></div>
              <div className='text-base'>
                Languages: Python, Java, C/C++, CABSL, JavaScript, R, MATLAB
              </div>
            </div>
            <div className='flex items-center p-2'>
              <div className='w-2 h-2 bg-[blue] mr-3 flex-shrink-0'></div>
              <div className='text-base'>
                Frameworks/Libraries: NodeJS, Flask, Django, PyTorch,
                Stable-baseline, OpenCV, Mujoco, Scikit, Pandas
              </div>
            </div>
            <div className='flex items-center p-2'>
              <div className='w-2 h-2 bg-[blue] mr-3 flex-shrink-0'></div>
              <div className='text-base'>
                Databases: MySQL, MongoDB, VectorDB
              </div>
            </div>
            <div className='flex items-center p-2'>
              <div className='w-2 h-2 bg-[blue] mr-3 flex-shrink-0'></div>
              <div className='text-base'>
                Others: Operation Research, Traditional Statistics,
                Reinforcement Learning, Linux, Raspberry-pi, Arduino, GitHub
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-between mx-auto pt-14 pb-5 text-xl font-bold'>
          <span>Education</span>
        </div>
        {education.map((educationObj, index) => (
          <div key={index} className='mb-10'>
            <EducationBox {...educationObj} />
          </div>
        ))}
      </div>
    </div>
  );
}
