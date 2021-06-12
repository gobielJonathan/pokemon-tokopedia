import Head from 'next/head'

const SEO = ({
    title, desc
}) => {
    return (
        <Head>
            <title data-testid='title-page'>{title}</title>
            <meta name="Description" content={desc} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={desc} />
            <meta name="robots" content="index, follow" />
        </Head>
    )
}
export default SEO