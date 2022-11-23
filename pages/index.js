import Head from 'next/head'

export default function Home({users}) {
  return (
    <div >
      {users.map((user, index) => (
        <pre key={index}>{user.name}    {user.username}    {user.email}</pre>
      ))}
    </div>
  )
}


export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await data.json();

  return { props: { users } }
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       users,
//     },
//   }
// }
