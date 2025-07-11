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
        src="https://burst.shopifycdn.com/photos/bright-purple-flower.jpg?width=925&exif=0&iptc=0"
        alt=""
      />
    </div>
  );
}