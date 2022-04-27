import {useSelector} from "react-redux";
import Song from "./Song";
import {ClockIcon} from "@heroicons/react/outline";

const Songs = () => {
    let playlist = {
        tracks: {
            items: [...Array(10).keys()]
        }
    };

    let currentPlaylist = useSelector(state => state.playlist.data);
    if(currentPlaylist?.tracks?.items.length) {
        playlist = currentPlaylist
    }
    
    return (
        <div className={"px-3 md:px-8 flex flex-col space-y-1 pb-28 text-white"}>
            <div className={"grid grid-cols-2 md:grid-cols-3 py-2 pr-4 pl-3 text-sm border-b border-gray-500 pb-2 mb-2"}>
                <div className={"flex items-center space-x-4 mr-auto"}>
                    <p className={"w-10 text-center text-gray-300"}>#</p>
                    <div>
                        <p className={"w-36 lg:w-64 truncate uppercase"}>Title</p>
                    </div>
                </div>

                <div className={"hidden lg:flex items-center w-36 lg:w-64 truncate"}>
                    <p>Album</p>
                </div>

                <div className={"flex items-center ml-auto mr-2"}>
                    <p><ClockIcon className={"w-5 h-5"}/></p>
                </div>
            </div>

            {playlist?.tracks?.items.map((item, i) => {
                return (
                    <Song key={i} track={item.track} order={i}/>
                )
            })}
        </div>
    )
}

export default Songs
