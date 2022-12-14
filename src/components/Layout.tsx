import Head from 'next/head';
import React from 'react';

export default function Layout({
  children
} : {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>Library</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}