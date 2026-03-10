'use client'
import { useState } from 'react'
import Link from 'next/link'
import Carticon from './Carticon'
import Image from "next/image";

const links = [
  { id: 1, title: 'Homepage', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Work Hours', url: '/' },
  { id: 4, title: 'Contact', url: '/' },
]

export default function Menu() {
  const [open, setOpen] = useState(false)
  const user=false
  return (
    <div>
     
      {!open ? (
        <Image
          src='/open.png'
          alt='Open menu'
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src='/close.png'
          alt='Close menu'
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

    
{ open &&     <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex gap-8 flex-col items-center justify-center flex-3xl z-10 '>
        {links.map((li) => (
          <Link href={li.url} key={li.id} onClick={()=>setOpen(false)}>
            {li.title}
          </Link>
        ))}
       {!user ? <Link href='/login' onClick={()=>setOpen(false)}>Login</Link>:
        <Link href='/oreders' onClick={()=>setOpen(false)}>ordera</Link>}
        <Link href='/cart' onClick={()=>setOpen(false)}><Carticon /></Link>
      </div>}
    </div>
  )
}