import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Step"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nulla fuga voluptas atque quisquam accusamus facilis adipisci, quas quae ipsa. Ea vero atque iusto nostrum illo magni aliquam velit rerum!
"
      />
      <Post author="Mar" content="Novo Post " />
    </div>
  );
}
