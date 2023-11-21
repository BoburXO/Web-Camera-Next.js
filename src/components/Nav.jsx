import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <>
    <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/get-data'}>GetData</Link>
    <Link href={'/x-net'}>X-net</Link>
    <Link href={'/video'}>Video</Link>
    </nav>
    </>
  )
}

export default Nav