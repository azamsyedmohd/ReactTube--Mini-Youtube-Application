import Home from "../assets/Home.png";
import Shorts from "../assets/shorts.png";
import Subscription from "../assets/subscription.png";
import Download from "../assets/download.png";
import Channel from "../assets/channel.png";
import History from "../assets/history.png";
import Videos from "../assets/videos.jpg";
import Watch from "../assets/watch-later.png";
import Trending from "../assets/trending.png";
import Shopping from "../assets/shopping.png";
import Music from "../assets/music.png";
import Movies from "../assets/movies.png";
import Live from "../assets/live.png";
import Gaming from "../assets/gaming.png";
import News from "../assets/news.png";
import Learning from "../assets/learning.png";
import Sports from "../assets/shorts.png";
import Podcast from "../assets/podcast.png";
import Fashion from "../assets/fashion.png";
const FullSideBarSection = () => {
  return (
    <>
      <section className="min-h-screen max-h-fit ">
        <article className="flex flex-col gap-1">
          <article className="flex gap-2  items-center mb-1">
            <img className="h-14 w-14" src={Home} alt="Home-Logo" />
            <p className="text-md pl-2 ">Home</p>
          </article>
          <article className="flex gap-8  items-center mb-3">
            <img className="h-8 w-8 ml-2" src={Shorts} alt="Shorts-Logo" />
            <p className="text-md ">Shorts</p>
          </article>
          <article className="flex gap-8  items-center">
            <img
              className="h-6 w-6 ml-3"
              src={Subscription}
              alt="Subscriptions-Logo"
            />
            <p className="text-md pl-1 ">Subscriptions</p>
          </article>
        </article>
        <article className="border-b border-1 mt-5"></article>
        <p className="font-semibold ml-4 mt-4 text-lg mb-5">You {">"}</p>
        <section className="flex flex-col gap-3 p-2">
          <article className="flex gap-6 mb-1">
            <img
              className="h-6 w-6 ml-1"
              src={Channel}
              alt="Your-Channel-Image"
            />
            <p className="ml-2">Your Channel</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="h-6 w-6 ml-1" src={History} alt="History-Image" />
            <p className="ml-2">History</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="h-6 w-6 ml-1" src={Videos} alt="Videos-Image" />
            <p className="ml-2">Your Videos</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="h-6 w-6 ml-1" src={Watch} alt="Watch-Later-Image" />
            <p className="ml-2">Watch later</p>
          </article>
          <article className="flex gap-7 mb-2">
            <img className="w-6 h-6 ml-1" src={Download} alt="Download-Image" />
            <p className="ml-2">Downloads</p>
          </article>
        </section>
        <article className="border-b border-1 mt-1"></article>
        <p className="mt-5 font-semibold ml-4 mb-5 text-lg">Explore</p>
        <section className="flex flex-col gap-3">
          <article className="flex gap-4 mb-2">
            <img className="w-6 h-6 ml-3" src={Trending} alt="Trending-Image" />
            <p className="ml-5">Trending</p>
          </article>
          <article className="flex gap-4 mb-2">
            <img className="w-6 h-6 ml-3" src={Shopping} alt="Shopping-Image" />
            <p className="ml-5">Shopping</p>
          </article>
          <article className="flex gap-4 mb-2">
            <img className="w-7 h-7 ml-3" src={Music} alt="Music-Image" />
            <p className="ml-5">Music</p>
          </article>
          <article className="flex gap-4 mb-2">
            <img className="w-6 h-6 ml-3" src={Movies} alt="Movies-Image" />
            <p className="ml-5">Movies</p>
          </article>
          <article className="flex gap-4 mb-2">
            <img className="w-6 h-6 ml-2" src={Live} alt="Live-Image" />
            <p className="ml-6">Live</p>
          </article>
          <article className="flex gap-4 mb-2">
            <img className="w-6 h-6 ml-3" src={Gaming} alt="Gaming-Image" />
            <p className="ml-5">Gaming</p>
          </article>
          <article className="flex gap-4 mb-2">
            <img className="w-6 h-6 ml-3" src={News} alt="News-Image" />
            <p className="ml-5">News</p>
          </article>
          <article className="flex gap-4 mb-2">
            <img className="w-7 h-7 ml-3" src={Learning} alt="Sports-Image" />
            <p className="ml-4">Learning</p>
          </article>
          <article className="flex gap-4 mb-2">
            <img className="w-8 h-8 ml-3" src={Sports} alt="Learning-Image" />
            <p className="ml-3">Sports</p>
          </article>
          <article className="flex gap-4 mb-2">
            <img className="w-6 h-6 ml-3" src={Fashion} alt="Fashion-Image" />
            <p className="ml-5">Fashion-Beauty</p>
          </article>
          <article className="flex gap-4 mb-2">
            <img className="w-7 h-7 ml-3" src={Podcast} alt="Podcasts-Image" />
            <p className="ml-5">Podcasts</p>
          </article>
        </section>
      </section>
    </>
  );
};
export default FullSideBarSection;
