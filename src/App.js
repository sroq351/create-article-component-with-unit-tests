import logo from "./logo.svg";
import "./App.css";
import { Article } from "./Article/article";

function App() {
  const articleContent = `
  <p> subtitle </p>
  <p style ="font-size: 12px;"> abc abc </p>
  <a href = "https://google.com"> google link </a>`;

  return (
    <main>
      <Article
        title="New article"
        content={articleContent}
        isSponsored={true}
        author="John"
      />
    </main>
  );
}

export default App;
