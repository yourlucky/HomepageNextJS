import './manager.css';
import ProjectBox from './ProjectBox';

import Link from 'next/link';

export default function Manger() {
  const websites = [
    {
      title: (
        <>
          High Integrated
          <br />
          Power Train System (HIPIS){' '}
        </>
      ),
      role: 'Product Manager',
      image: '/Smart_Factory.jpeg',
      content: (
        <>
          <p className='font-extrabold'>
            Enhanced Quality Management Systems:
            <br />
          </p>
          Developed a system that collects and analyzes equipment data in
          powertrain manufacturing process, providing feedback to enhance
          manufacturing quality and reduce costs.
          <br />
          <br />
          <p className='font-extrabold'>
            Efficient Architectures with Tibero zeta DBMS:
            <br />
          </p>
          New database architectures have slashed DB load times from 600s to 5s,
          significantly reducing Oracle dependency. (DownSizing Oracle)
          <br />
          <br />
          <p className='font-extrabold'>
            Global Standardization and SPC Implementation: <br />
          </p>
          Standardized data across 20k machines in 10 countries and incorporated
          Statistical Process Control (SPC) to streamline processes, reducing
          defects by 30%.
        </>
      ),
    },
    {
      title: (
        <>
          High Integrated
          <br />
          Vehicle System (HIVIS){' '}
        </>
      ),
      role: 'Product Manager',
      image: '/Industry4_1.jpg',
      content: (
        <>
          <p className='font-extrabold'>
            Enhanced Quality Management Systems:
            <br />
          </p>
          Unlike powertrain factories, vehicle factories involve a lot of manual
          labor. To facilitate interaction between humans and information,
          kiosks and Smart Pens for manual data entry were introduced.
          <br />
          <br />
          <p className='font-extrabold'>
            Human-Interactive Technology Integration:
            <br />
          </p>
          Incorporated tools like kiosks and Smart Pens in factories to enable
          seamless data collection from manual processes, enhancing overall
          workflow efficiency.
          <br />
          <br />
          <p className='font-extrabold'>
            Advanced Recognition Technology:
            <br />
          </p>
          By training machine learning models exclusively with Hyundai factory
          symbols, the recognition rate of smart-pens was improved from 89% to
          99.8%. Additionally, enhanced central control Bluetooth technology was
          applied to minimize interference within the factory
        </>
      ),
    },

    {
      title: (
        <>
          Mobile Inspection
          <br />
          System{' '}
        </>
      ),
      role: 'Lead Developer',
      image: '/mobileVideo.png',
      content: (
        <>
          <p className='font-extrabold'>
            Minimized Downtime with Mobile System:
            <br />
          </p>
          To minimize downtime during equipment failures, a mobile video
          inspection system was developed for communication with external
          facility engineers. This system, the first of its kind within the
          factory, was equipped with extensive security features.
          <br />
          <br />
          <p className='font-extrabold'>
            Foundation of Mobile Security in the Factory:
            <br />
          </p>
          As the inaugural mobile system within the facility, significant
          efforts were made to enhance security through device authentication
          and unidirectional video processing while also improving user
          convenience.
          <br />
          <br />
          <p className='font-extrabold'>
            Expansion Across the Enterprise:
            <br />
          </p>
          Beyond simple video inspection, the system evolved to integrate
          thermal imaging cameras and oscilloscopes, broadening its application.
          The scope of use was expanded to include new part vendor quality
          inspections, service center accident investigations, and monitoring of
          new factory expansions. Additionally, numerous PoCs were conducted to
          integrate AR technology.
        </>
      ),
      addContent: (
        <>
          <Link
            href='https://vccs2.hmc.co.kr/mris/'
            style={{ color: 'rgb(0, 0, 255)' }}
          >
            https://vccs2.hmc.co.kr/mris
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className='flex'>
      {/* 좌측 버튼 */}
      <div className='hidden sm:flex flex-col w-1/4 bg-[#E6DACE] pt-12 gap-4 items-center'>
        <Link href='/projects/full'>
          <button className='round' role='button'>
            &lt;
          </button>
        </Link>
      </div>

      {/* 가운데 콘텐츠 */}
      <div className='w-full max-w-[800px] mx-auto'>
        <div className='flex items-center justify-center font-bold text-xxl pt-12 pb-10'>
          <bbox className='font-xxl w-5 h-5 bg-[blue] mr-3'></bbox>Product
          Manager
        </div>
        <div className='font-plus text-center p-4 pb-10'>
          As a full-stack engineer, I've had the opportunity to work on a
          diverse range of engineering projects that showcase my skills in both
          backend and front-end development. Each project represents a unique
          challenge and an opportunity for me to demonstrate my problem-solving
          abilities and technical expertise. I'm excited to share these projects
          with you and provide insights into my engineering journey.{' '}
        </div>

        {websites.map((projObj, index) => (
          <div key={index} className='mb-10'>
            <ProjectBox {...projObj} />
          </div>
        ))}
      </div>

      {/* 우측 버튼 */}
      <div className='hidden sm:flex flex-col w-1/4 bg-[#E6DACE] pt-12 gap-4 items-center'>
        <Link href='/projects/ai'>
          <button className='round' role='button'>
            &gt;
          </button>
        </Link>
      </div>
    </div>
  );
}
