export const socialLogos = [
  { link: "http://instagram.com", src: "instagram", alt: "instagram" },
  { link: "http://github.com", src: "github", alt: "github" }

]

const Footer = () => {
  return (
    <footer>
      <ul>
        {socialLogos.map((logo, idx) => {
          <li key={idx}>
            <a href={logo.link}>
              <img src={logo.src} alt={logo.alt} />
            </a>
          </li>
        })}
      </ul>
      <p>Created with love by Blah blah blah <span role="img">🤓</span></p>
    </footer>
  )
}


export default Footer