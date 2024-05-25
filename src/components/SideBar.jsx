import ComingSoon from "../assets/icons/commingSoon.svg"
import fav from "../assets/icons/favourite.svg"
import NewRel from "../assets/icons/newRelease.svg"
import Trending from "../assets/icons/trending.svg"
import WL from "../assets/icons/watchLater.svg"


export default function SideBar(){
    return (
        <>
         <aside>
				<ul className="space-y-2">
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-white" href="#">
							<img src={Trending} width="24" height="24" alt="" />
							<span>Trending</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={NewRel} width="24" height="24" alt="" />
							<span>New Releases</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={ComingSoon} width="24" height="24" alt="" />
							<span>Coming Soon</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={fav} width="24" height="24" alt="" />
							<span>Favourites</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={WL} width="24" height="24" alt="" />
							<span>Watch Later</span>
						</a>
					</li>
				</ul>
			</aside>
        </>
    )
}