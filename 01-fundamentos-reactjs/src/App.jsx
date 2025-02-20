import { Post } from "./Post";

export function App() {
  return (
    <div>
      <h1>Posts</h1>
      <Post
        author="Step"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nulla fuga voluptas atque quisquam accusamus facilis adipisci, quas quae ipsa. Ea vero atque iusto nostrum illo magni aliquam velit rerum!
"
      />
      <Post author="Mar" content="Novo Post " />
    </div>
  );
}
