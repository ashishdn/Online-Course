import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-gray-100'><div className=" container mx-auto flex justify-between items-center py-4 ">
      <div><h1 className='text-2xl font-semibold'>Online Course</h1></div>
      <div>
        <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <button className='btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded'>Login</button>
      </div>
    </div></div>
  )
}
