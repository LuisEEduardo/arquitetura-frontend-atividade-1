import ArticleItem from "../../components/articleItem/ArticleItem";
import Navbar from "../../components/navbar/Navbar";
import UserInfo from "../../components/userInfo/UserInfo";

export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-blue-900 w-full top-0 start-0 h-80 mb-16">
        <Navbar />
        <UserInfo />
      </div>
      <div className="flex content-center justify-center text-left">
        <div className="w-1/3">
          <h1 className="font-bold text-3xl mb-4">Últimas do blob</h1>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </div>
      </div>
    </>
  );
}
