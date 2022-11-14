import Head from 'next/head'

const Header = () => {
  const title = 'World Cup Group Stage Fantasy'
  const titleShort = 'Group Stage'
  const icon = '/trophy.png'
  const url = 'https://world-cup-group-stage.vercel.app/'
  return (
    <Head>
      <title>{titleShort}</title>
      <meta name="description" content={`${title} by Sean++`} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href={icon} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={`${title} by Sean++`} />
      <meta property="og:image" content={icon} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" value={title} />
      <meta name="twitter:description" value={`${title} by Sean++`} />
      <meta name="twitter:image" content={icon} />
      <meta name="twitter:url" value={url} />
    </Head>
  )
}

export default Header
