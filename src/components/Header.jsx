export default function Header() {
  return (
    <>
      <div className="">
        <img
          src="https://avatars.githubusercontent.com/u/7849221?v=4"
          alt="user_photo"
        />
      </div>
      <div className="">
        <h1>Ayden Herbst</h1>
        <h3>Full Stack Developer</h3>
        <p className="">aeroswebdesign.com</p>
      </div>
      <div className="buttons">
        <a href="https://aeroswebdesign.com" className="email">
            <img src="./src/assets/email.svg" alt="" />
            <p>Email</p>
        </a>
        <a href="https://aeroswebdesign.com" className="linkedin">
            <img src="./src/assets/email.svg" alt="" />
            <p>LinkedIn</p>
        </a>
      </div>
    </>
  );
}
