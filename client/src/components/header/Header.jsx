import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.stocksnap.io/img-thumbs/280h/spring-flower_6UQXFWM8DQ.jpg"
        alt=""
      />
    </div>
  );
}