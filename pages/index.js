import Head from 'next/head'
import Avatar from '../components/Avatar';
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid';
import Image from 'next/image'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/**Header */}
      <header className="flex w-full p-5 justify-between text-lg font-medium text-gray-700">
        {/** Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/** Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/**Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 
          rounded-full hover:bg-gray-100 cursor-pointer"/>

          <Avatar url="https://coaching.papareact.com/ai9"/>
        </div>
      </header>

      {/**Body */}
      <form>
        <Image src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input type="text" className="flex-grow focus:outline-none"/>
          <MicrophoneIcon className="h-5"/>
        </div>
      </form>

      {/**Footer */}
    </div>
  );
}
