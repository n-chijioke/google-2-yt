import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/**Header */}
      <header>
        {/** Left */}
        <div>
          <p>About</p>
          <p>Store</p>
        </div>

        {/** Right */}
        <div>
          <p>Gmail</p>
          <p>Images</p>

          {/**Icon */}

          {/**Avatar */}
        </div>
      </header>

      {/**Body */}

      {/**Footer */}
    </div>
  );
}
