import {HomeIcon, LibraryIcon, PlusCircleIcon, SearchIcon, HeartIcon, RssIcon} from "@heroicons/react/outline";
import {signOut, useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import useSpotify from "../hooks/useSpotify";
import {useDispatch, useSelector} from "react-redux";
import {playlistActions} from "../store/Playlist";

const Sidebar = () => {
    const dispatch = useDispatch();
    const spotifyApi = useSpotify();
    const {data: session} = useSession();
    const [playlists, setPlaylists] = useState([]);
    const currentPlaylistId = useSelector(state => state.playlist?.data?.id);

    useEffect(() => {
        if(spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then(playlists => {
                setPlaylists(playlists.body.items);
            });
        }
    }, [session, spotifyApi]);

    const handlePlaylistClick = (playlistId) => {
        if(currentPlaylistId !== playlistId){
            spotifyApi.getPlaylist(playlistId).then(playlist => {
                dispatch(playlistActions.setPlaylist(playlist.body));
            });
        }
    };

    return (
        <div className={"text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen hidden md:inline-flex"}>
            <div className={"space-y-4 w-60"}>
                <div className={"flex items-center space-x-2 text-white"}>
                    <LibraryIcon className={"h-5 w-5"}/>
                    <p>Your Playlists</p>
                </div>

                <hr className={"border-t-[0.1px] border-gray-900"} />

                {playlists.map((playlist) => {
                    return (
                        <p key={playlist.id} className={`cursor-pointer hover:text-white`} onClick={() => handlePlaylistClick(playlist.id)}>{playlist.name}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
