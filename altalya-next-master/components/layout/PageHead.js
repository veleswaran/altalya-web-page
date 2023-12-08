import Head from 'next/head';
import React from 'react';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Altalya | Transforming hands into minds"}

                </title>
                <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
            </Head>
        </>
    );
};

export default PageHead;