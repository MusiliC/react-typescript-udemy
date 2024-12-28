import { type ReactNode } from "react"

type headerPropTypes = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

function Header({image, children}: headerPropTypes) {
  return (
    <header>
      <img {...image}/>
      {children}
    </header>
  )
}

export default Header