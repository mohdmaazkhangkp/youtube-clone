import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ChannelPage from "./components/ChannelPage";
import SearchFeed from "./components/SearchFeed";
import Sidebar from "./components/Sidebar";

function App() {
  // const appRoute = createBrowserRouter([
  //   {
  //    path: "/" ,
  //    element: <Body/>,
  //    children:[
  //     {
  //       path: "/",
  //       element: <MainContainer/>
  //     },
  //     {
  //       path:"/video/:id",
  //       element: <WatchPage/>
  //     },
  //     {
  //       path:"/channel/:id",
  //       element: <ChannelPage/>
  //     },
  //      {
  //        path: "/search/:searchTerm",
  //        element: <SearchFeed />
  //      }
  //    ]
  //   }
  // ])
  return (
    <div className=" pt-2">
      <Router>
      <Header/>
        
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/" element={<MainContainer />} />
          <Route path="/video/:id" element={<WatchPage />} />
          <Route path="/channel/:id" element={<ChannelPage />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Route>
      </Routes>
      
    </Router>

      {/* 
      * Header
      * 
      * Body
      *   Sidebar
      *     MenuItems
      *   MainContainer
      *     ButtonsList
      *     VideoContainer
      *       VideoCard
      *       ChannelCard
      */}
    </div>
  );
}

export default App;
