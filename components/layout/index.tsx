import React from 'react';
import Head from 'next/head';
import Navbar from '../navbar';
import Footer from '../footer';

export default function Layout(props: any) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="bg-bg-colors overflow-hidden">
        <Navbar />
        <div className=" 3xl:w-5/6 4xl:w-1/2 m-auto">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
}
