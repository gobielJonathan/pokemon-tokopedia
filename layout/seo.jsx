import Head from 'next/head'

const SEO = ({
    title, desc
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="Description" content={desc} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={desc} />
            <meta name="robots" content="index, follow" />

            {/* <link rel="canonical" href={} /> */}
      


        </Head>
    )
}
export default SEO