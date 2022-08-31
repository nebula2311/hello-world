import type { NextPage } from 'next'
import CSS from 'csstype'


interface Props {
  data?: {
    context: string;
  }
}

const Home: NextPage<Props> = (props) => {
  return (
    <h1>
      {props.data?.context}
    </h1>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://hello-project-1a4e2.web.app/api/hello`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
