'use client'

import React, { useEffect, useState } from 'react'
import { getProviders } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  const signOut = () => { }
  const signIn = (userId: any) => {
    return userId;
  }
  const [providers, setProviders] = useState<any>(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const reqProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }

    reqProviders()
  }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='Promptopia Logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {
          isUserLoggedIn
            ?
            (
              <div className='flex gap-3 md:gap-5'>
                <Link
                  href="create-prompt"
                  className='black_btn'
                >
                  Create Prompt
                </Link>
                <button type="button"
                  onClick={signOut}
                  className='outline_btn'
                >
                  Sign Out
                </button>

                {/* <Link href={"/profile"}> */}
                <Image
                  src='/assets/images/logo.svg'
                  alt='Profile'
                  width={37}
                  height={37}
                  className='rounded-full'
                // onClick={() => { setToggleDropdown((prev) => !prev) }}
                />
                {/* </Link> */}
              </div>
            )
            :
            (
              <>
                {providers && Object.values(providers).map((provider: any) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'
                  >
                    Sign In
                  </button>
                ))}
              </>
            )
        }

      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {
          isUserLoggedIn
            ?
            (
              <div className="flex">
                <Image
                  src='/assets/images/logo.svg'
                  alt='Profile'
                  width={37}
                  height={37}
                  className='rounded-full'
                  onClick={() => { setToggleDropdown((prev) => !prev) }}
                />
                {toggleDropdown && (
                  <div className="dropdown">
                    <Link
                      href={"/profile"}
                      className='dropown_link'
                      onClick={() => { setToggleDropdown(false) }}
                    >
                      My Profile
                    </Link>
                    <Link
                      href={"/create-prompt"}
                      className='dropown_link'
                      onClick={() => { setToggleDropdown(false) }}
                    >
                      Create Prompt
                    </Link>
                    <button
                      type="button"
                      onClick={() => { setToggleDropdown(false); signOut() }}
                      className='mt-5 w-full black_btn'
                    >
                      Sign Out  
                    </button>
                  </div>
                )}
              </div>
            )
            :
            (
              <>
                {providers && Object.values(providers).map((provider: any) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'
                  >
                    Sign In
                  </button>
                ))}

              </>
            )

        }
      </div>
    </nav>
  )
}

export default Nav