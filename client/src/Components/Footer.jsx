import React from 'react'
import { Footer, FooterDivider, FooterTitle } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook,BsInstagram,BsX,BsGithub,BsLinkedin } from 'react-icons/bs'
export default function FooterCom() {
  return (
    <Footer container className='border-t-8 my-auto border-teal-500'>
        <div className=" w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to='/' className='self-center whitespace-nowrap text-lg
    sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-2 bg-gradient-to-r from-pink-600 via-pink-600 to-purple-600 rounded-lg text-white'>Naveen's</span>Blog
    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div >
                    <FooterTitle title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                        href='https://naveen-g.vercel.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            My Portfolio
                        </Footer.Link>
                        <Footer.Link
                        href='/about'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            About Me
                        </Footer.Link>

                    </Footer.LinkGroup>
                    </div>
                    <div >
                    <FooterTitle title='Follow Me'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                        href='https://github.com/Naveen-gn'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Github
                        </Footer.Link>
                        <Footer.Link
                        href='https://www.linkedin.com/in/naveen-g-281356253'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Linkedin
                        </Footer.Link>

                    </Footer.LinkGroup>
                    </div>
                    <div >
                    <FooterTitle title='Legal'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                        as={'div'}
                        >
                         <Link to='/about'>Privacy Policy</Link>   
                        </Footer.Link>
                        <Footer.Link
                        as={'div'}
                        >
                          <Link to='/about'>Terms & Conditions</Link>
                        </Footer.Link>

                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <FooterDivider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Naveen's Blog" year={new Date().getFullYear()} />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon target='_blank' href='https://github.com/Naveen-gn' icon={BsGithub} />
                <Footer.Icon target='_blank' href='https://www.linkedin.com/in/naveen-g-281356253' icon={BsLinkedin} />
                <Footer.Icon target='_blank' href='https://www.facebook.com/profile.php?id=100022489606274' icon={BsFacebook} />
                <Footer.Icon target='_blank' href='https://www.instagram.com/luv_naveen.12/' icon={BsInstagram} />
                <Footer.Icon target='_blank' href='https://twitter.com/Naveen12gn' icon={BsX} />
            </div>
            </div>
        </div>
    </Footer>
  )
}
