import { useRouter } from 'next/router';

function ActiveLink({ children, href }) {
  const router = useRouter();

  const style = {
    padding:15,
    color: router.asPath === href ? 'red' : 'black',
    borderLeft: router.asPath === href ? '5px solid red' : 'black',
  };

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
};

export default ActiveLink
