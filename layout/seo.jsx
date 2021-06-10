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
            
            <link rel='icon' type='image/png' sizes="192x192" href='/icon-192x192.png' />
            <link rel='icon' type='image/png' sizes="256x256" href='/icon-256x256.png' />
            <link rel='icon' type='image/png' sizes="512x512" href='/icon-512x512.png' />

            <link rel='apple-touch-icon' sizes="32x32" href='/favicon.ico' />

            <link rel='manifest' href='/manifest.webmanifest' />
            <link rel='mask-icon' href='/logo.svg' color='#5bbad5' />

            <link rel='shortcut icon' href='/favicon.ico' />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />


        </Head>
    )
}
export default SEO