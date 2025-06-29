import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://wallup.net/wp-content/uploads/2016/03/10/324923-landscape-road-trees-nature-grass-field-hill-forest-clouds.jpg" />
      <Post img="https://themegoods-main.b-cdn.net/wp-content/uploads/2016/12/grandphotography-1.png" />
      <Post img="https://www.stockvault.net/data/2018/07/09/253014/preview16.jpg"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ApjpbD72qAVZde6hbsgHDOwBkcr6Yk8HmQ&s"/>
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
  );
}

