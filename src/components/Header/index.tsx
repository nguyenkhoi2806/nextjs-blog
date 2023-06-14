import { StaticImageData } from "next/image";

interface HeaderProps {
  text: string;
  subText: string;
  background: StaticImageData;
}

const Header = (props: HeaderProps) => {
  const { text, subText, background } = props;

  return (
    <header
      className="intro-header"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="page-heading">
              <h1>{text}</h1>
              <hr className="small" />
              <span className="subheading">{subText}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
