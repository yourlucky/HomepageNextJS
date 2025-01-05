import './globals.css';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ProjectsDropdown from './ProjectsDropdown';
import { Inter } from 'next/font/google';
import RecoilProvider from './RecoilProvider';

// Inter 폰트 설정
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '700'], // 필요한 폰트 굵기
  variable: '--font-inter', // CSS 변수로 설정
});

export const metadata = {
  title: 'Yoon Na',
  description:
    'Introducing Yoon Na, somewhere between a passionate hobbyist and a dedicated professional.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.variable}>
      <head />
      <body suppressHydrationWarning={true}>
        <RecoilProvider>
          <div className='bg-white sm:px-6 lg:px-8 py-5'>
            <div className='flex justify-between items-end px-1 sm:px-6 h-24 bg-white text-black'>
              <div className='text-base mr-1 sm:mr-6 lg:mr-8'>
                <Link
                  href='/'
                  className='inline-flex items-center font-extrabold whitespace-nowrap text-plus sm:text-xl pb-10'
                >
                  <span className='inline-block w-4 h-4 bg-[blue] ml-1 mr-2.5 sm:pb-2'></span>
                  YoonChae
                </Link>
                <span className='hidden sm:inline sm:whitespace-nowrap pb-2'>
                  / Software Engineer
                </span>
              </div>
              <div className='flex gap-3 xs:gap-4 sm:gap-8 lg:gap-10  text-sm pb-2'>
                <Link href='/' className='hover:text-[#0050ff]'>
                  ABOUT ME
                </Link>
                <Link href='/resume' className='hover:text-[#0050ff]'>
                  RESUME
                </Link>
                <ProjectsDropdown />
              </div>
            </div>
          </div>
          {children}
        </RecoilProvider>

        <div className='flex justify-between items-end px-4 sm:px-6 pb-5 h-24 bg-white text-black'>
          {/* xs 이하에서 숨기기 */}
          <div className='hidden sm:block text-base mr-4 sm:mr-6 lg:mr-8'>
            Today's choices create tomorrow's stories.
          </div>

          <div className='flex gap-3 xs:gap-4 sm:gap-8 lg:gap-10 text-sm'>
            <div className='flex flex-col items-center'>
              <div className='font-bold'>Call</div>
              <div className='mt-1'>608-770-3823</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='font-bold'>Write</div>
              <div className='mt-1'>yoonchae.na@gmail.com</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='font-bold'>Follow</div>
              <div className='flex gap-4 mt-1'>
                <a
                  href='https://www.linkedin.com/in/ycna/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin size={20} className='hover:text-blue-600' />
                </a>
                <a
                  href='https://github.com/yourlucky'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub size={20} className='hover:text-gray-700' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
