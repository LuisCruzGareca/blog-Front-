import Footer from "../componets/Footer";
import Header from "../componets/Header";
import PostProvider from "../context/PostContext";
import Main from "./Main";

export default function Home() {
  return (
    <div>
      <PostProvider>
        <Header />
        <Main />
      </PostProvider>

      <Footer />
    </div>
  );
}
