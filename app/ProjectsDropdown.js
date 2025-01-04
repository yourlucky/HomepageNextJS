'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectsDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleDropdown}
        className='hover:text-[#0050ff] focus:outline-none'
      >
        PROJECTS
      </button>
      {isDropdownOpen && (
        <div className='absolute top-8 left-0 bg-white shadow-lg border rounded-md w-48 z-50'>
          <Link
            href='/projects/ai'
            className='block px-4 py-2 hover:text-[#0050ff]'
          >
            AI
          </Link>
          <Link
            href='/projects/full'
            className='block px-4 py-2 hover:text-[#0050ff]'
          >
            Full Stack
          </Link>
          <Link
            href='/projects/manager'
            className='block px-4 py-2 hover:text-[#0050ff]'
          >
            Project Manager
          </Link>
        </div>
      )}
    </div>
  );
}
