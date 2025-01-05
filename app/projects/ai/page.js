import './ai.css';
import ProjectBox from './ProjectBox';
import ProjectUBox from './ProjectUBox';

import Link from 'next/link';

export default function AiProject() {
  const chatbot = [
    {
      title: 'Private Chatbot',
      role: 'Personal Project',
      image: '/ChatBot.png',
      content: `As a developer, I had the opportunity to create a private chatbot application from scratch. 
      This project involved developing a chatbot that allows users to upload personal documents for Q&A interactions, 
      so I no longer need to read and study documents manually. 
      To enhance my personal skills, I also implemented functionality to generate quizzes from JSON-formatted data. 
      Additionally, I integrated OpenAI's GPT-API for language model interactions and implemented a deployable LLM using Ollama for local machine learning model deployment.`,
      addContent: (
        <>
          <div>Technologies Used</div>
          <div>Development: LangChain, Streamlit</div>
          <div>API: GPT-API, HuggingFace</div>
          <div>Local Deployment: Ollama</div>
        </>
      ),
    },
  ];

  const soccerbot = [
    {
      title: 'Private Chatbot',
      role: 'Software Engineer',
      youtubeLink: [
        'https://www.youtube.com/embed/0Rd1JdVSBTo?rel=0&vq=hd720',
        'https://www.youtube.com/embed/w6erVAAG09w?rel=0&vq=hd720',
      ],
      content: (
        <>
          As a founding member, I contributed from the start of the Nao robot
          project. Training AI for robots requires substantial data, and since
          teaching real robot movements is time-consuming, I used the Pygame
          library to create simulation games. These simulations generated the
          data needed to train the robots and explore digital twin concepts.
          <br />
          <br />
          For perception tasks like recognizing balls, fields, and other robots,
          I used the OpenCV library. For planning, I applied reinforcement
          learning algorithms from the Stable-Baselines library to optimize
          robot behavior. For robot control, I used the codebase of B-Human, the
          2020 RoboCup champions, to ensure effective movement execution.
        </>
      ),
      addContent: (
        <>
          <div>Technologies Used</div>
          <div>Perception : ball/field recognition (OpenCV)</div>
          <div>Planning : optimize path (Sim2Real, stablebaseline)</div>
          <div>Control : robot movements (C++, B-human)</div>
          <div className='font-bold py-3'>
            Secured 3rd place at RoboCup 2023 in France{' '}
          </div>

          <Link
            href='https://spl.robocup.org/wp-content/uploads/SPL2023_TDP_BadgerBots.pdf'
            style={{ color: 'rgb(0, 0, 255)' }}
          >
            Description Paper
          </Link>
        </>
      ),
    },
    {
      title: (
        <>
          IoT Control system
          <br /> <div className='font-sm px-2'>: from sensor to the web</div>
        </>
      ),
      role: 'Hobby',
      youtubeLink: ['https://www.youtube.com/embed/_6qmTGQIzXA'],
      content: (
        <>
          As a hobby, I engage in Raspberry projects. I recently purchased an
          BME280 chip, soldered it, and developed a simple web system that
          processes data in the cloud. This setup allows me to manage my
          schedule and monitor the temperature and humidity in my room.
        </>
      ),
      addContent: (
        <>
          <div>Technologies Used</div>
          <div>Hardware : Raspberry-Pi, BME280(I²C)</div>
          <div>Framework : Python Flask</div>
        </>
      ),
    },
  ];

  return (
    <div className='flex'>
      {/* 좌측 버튼 */}
      <div className='hidden sm:flex flex-col w-1/4 bg-[#E6DACE] pt-12 gap-4 items-center'>
        <Link href='/projects/manager'>
          <button className='round' role='button'>
            &lt;
          </button>
        </Link>
      </div>

      {/* 가운데 콘텐츠 */}
      <div className='w-full max-w-[800px] mx-auto'>
        <div className='flex items-center justify-center font-bold text-xxl pt-12 pb-10'>
          <div className='font-xxl w-5 h-5 bg-[blue] mr-3'></div>Implementing
          with AI
        </div>
        <div className='font-plus text-center p-4 pb-10'>
          I have a strong passion for learning and implementing new things. My
          interest in AI, which began with robot soccer, naturally extended to
          IoT sensor processing and machine learning models. Recently, I have
          been focusing on LLMs using LangChain, working on personal projects in
          this area. As new technologies continue to emerge, I am particularly
          interested in leveraging these advancements to create innovative
          business solutions.
        </div>

        {chatbot.map((projObj, index) => (
          <div key={index} className='mb-10'>
            <ProjectBox {...projObj} />
          </div>
        ))}

        {soccerbot.map((projObj, index) => (
          <div key={index} className='mb-10'>
            <ProjectUBox {...projObj} />
          </div>
        ))}
      </div>

      {/* 우측 버튼 */}
      <div className='hidden sm:flex flex-col w-1/4 bg-[#E6DACE] pt-12 gap-4 items-center'>
        <Link href='/projects/full'>
          <button className='round' role='button'>
            &gt;
          </button>
        </Link>
      </div>
    </div>
  );
}
