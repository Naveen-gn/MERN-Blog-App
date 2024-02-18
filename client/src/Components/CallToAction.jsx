import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border bg-slate-200 dark:bg-slate-900 border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                My personal Portfolio!
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my portfolio
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl  rounded-bl-none'>
                <a href="https://naveen-g.vercel.app/" target='_blank' rel='noopener noreferrer'>
                    My Portfolio
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://firebasestorage.googleapis.com/v0/b/naveen-portfolio-images.appspot.com/o/portfolio.png?alt=media&token=bc42d39b-79b0-4f5b-8395-a359d60cb0c6" />
        </div>
    </div>
  )
}