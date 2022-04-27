import Styles from './Center.module.css';
import {signOut, useSession} from "next-auth/react";
import {Fragment, useEffect, useState} from "react";
import {shuffle} from "lodash";
import {useDispatch, useSelector} from "react-redux";
import useSpotify from "../hooks/useSpotify";
import Songs from "./Songs";
import {
    HeartIcon,
    HomeIcon,
    LibraryIcon, LogoutIcon,
    PlusCircleIcon,
    RssIcon,
    SearchIcon
} from "@heroicons/react/outline";
import {uiActions} from "../store/UI";

const colors = [
    {
        hex: '#3b82f6',
        gradient: 'from-blue-500',
        active: 'bg-blue-500',
        shadow: 'shadow-blue-500',
        before: 'before:shadow-[20px_20px_0_#3b82f6]',
        after: 'after:shadow-[-20px_20px_0_#3b82f6]',
        // hover: 'hover:from-blue-500'
    },
    {
        hex: '#22c55e',
        gradient: 'from-green-500',
        active: 'bg-green-500',
        shadow: 'shadow-green-500',
        before: 'before:shadow-[20px_20px_0_#22c55e]',
        after: 'after:shadow-[-20px_20px_0_#22c55e]',
        // hover: 'hover:from-green-500'
    },
    {
        hex: '#ef4444',
        gradient: 'from-red-500',
        active: 'bg-red-500',
        shadow: 'shadow-red-500',
        before: 'before:shadow-[20px_20px_0_#ef4444]',
        after: 'after:shadow-[-20px_20px_0_#ef4444]',
        // hover: 'hover:from-red-500'
    },
    {
        hex: '#eab308',
        gradient: 'from-yellow-500',
        active: 'bg-yellow-500',
        shadow: 'shadow-yellow-500',
        before: 'before:shadow-[20px_20px_0_#eab308]',
        after: 'after:shadow-[-20px_20px_0_#eab308]',
        // hover: 'hover:from-yellow-500'
    },
    {
        hex: '#a855f7',
        gradient: 'from-purple-500',
        active: 'bg-purple-500',
        shadow: 'shadow-purple-500',
        before: 'before:shadow-[20px_20px_0_#a855f7]',
        after: 'after:shadow-[-20px_20px_0_#a855f7]',
        // hover: 'hover:from-purple-500'
    },
    {
        hex: '#f97316',
        gradient: 'from-orange-500',
        active: 'bg-orange-500',
        shadow: 'shadow-orange-500',
        before: 'before:shadow-[20px_20px_0_#f97316]',
        after: 'after:shadow-[-20px_20px_0_#f97316]',
        // hover: 'hover:from-orange-500'
    },
    {
        hex: '#ec4899',
        gradient: 'from-pink-500',
        active: 'bg-pink-500',
        shadow: 'shadow-pink-500',
        before: 'before:shadow-[20px_20px_0_#ec4899]',
        after: 'after:shadow-[-20px_20px_0_#ec4899]',
        // hover: 'hover:from-pink-500'
    },
    {
        hex: '#6366f1',
        gradient: 'from-indigo-500',
        active: 'bg-indigo-500',
        shadow: 'shadow-indigo-500',
        before: 'before:shadow-[20px_20px_0_#6366f1]',
        after: 'after:shadow-[-20px_20px_0_#6366f1]',
        // hover: 'hover:from-indigo-500'
    },
    {
        hex: '#14b8a6',
        gradient: 'from-teal-500',
        active: 'bg-teal-500',
        shadow: 'shadow-teal-500',
        before: 'before:shadow-[20px_20px_0_#14b8a6]',
        after: 'after:shadow-[-20px_20px_0_#14b8a6]',
        // hover: 'hover:from-teal-500'
    },
    {
        hex: '#6b7280',
        gradient: 'from-gray-500',
        active: 'bg-gray-500',
        shadow: 'shadow-gray-500',
        before: 'before:shadow-[20px_20px_0_#6b7280]',
        after: 'after:shadow-[-20px_20px_0_#6b7280]',
        // hover: 'hover:from-gray-500'
    },
]

const Center = () => {
    const dispatch = useDispatch();
    const spotifyApi = useSpotify();
    const {data: session} = useSession();
    const playlist = useSelector(state => state.playlist.data);
    const color = useSelector(state => state.ui.color);

    useEffect(() => {
        dispatch(uiActions.setColor(shuffle(colors).pop()));
    }, [spotifyApi, playlist, dispatch]);

    return (
        <div className={"flex-grow col-span-full h-screen overflow-y-scroll scrollbar-hide"}>
            {/*<header className={"absolute top-5 right-8"}>*/}
            {/*    <div className={`flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 text-white text-sm`}>*/}
            {/*        <img className={"rounded-full w-7 h-7 overflow-hidden"} src={session?.user.image} alt={""}/>*/}
            {/*        <h2>{session?.user.name}</h2>*/}
            {/*        <ChevronDownIcon className={"w-4 h-4"}/>*/}
            {/*    </div>*/}

            {/*    <div>*/}

            {/*    </div>*/}
            {/*</header>*/}

            <div>
                <nav className={`flex justify-center items-center text-white w-full ${Styles.nav}`}>
                    <ul className={"flex space-x-8"}>
                        <li className={`relative p-3 rounded-t-full`}>
                            <HomeIcon className={"w-7 h-7"}/>
                        </li>
                        <li className={`relative p-3 rounded-t-full`}>
                            <SearchIcon className={"w-7 h-7"}/>
                        </li>
                        <li className={`relative p-3 rounded-t-full`}>
                            <HeartIcon className={"w-7 h-7"}/>
                        </li>
                        <li className={`${color?.active} relative p-3 rounded-t-full ${color?.after} ${color?.before} ${Styles.active}`}>
                            <LibraryIcon className={"w-7 h-7"}/>
                        </li>
                        <li className={`relative p-3 rounded-t-full`}>
                            <PlusCircleIcon className={"w-7 h-7"}/>
                        </li>
                        <li className={`relative p-3 rounded-t-full`}>
                            <RssIcon className={"w-7 h-7"}/>
                        </li>
                        <li className={`relative p-3 rounded-t-full`}>
                            <LogoutIcon onClick={signOut} className={"w-7 h-7 text-red-600"}/>
                        </li>
                    </ul>
                </nav>

                <section className={`bg-gradient-to-b to-black ${color?.gradient} flex p-3 md:p-8 space-x-7 text-white items-end`}>
                    {playlist?.images?.[0]?.url ? (
                        <img className={"h-60 w-60 shadow-2xl rounded-lg"} src={playlist?.images?.[0]?.url} alt={playlist?.name} />
                    ) : (
                        <div className={`h-60 w-60 shadow-2xl rounded-lg from-gray-900 skeleton`}></div>
                    )}
                    {!playlist.id && (
                        <Fragment>
                            <div className={"mt-auto"}>
                                <p className={"uppercase mb-4 text-sm"}>Playlist</p>
                                <h1 className={"text-2xl md:text-4xl xl:text-7xl font-bold mb-4"}>Select playlist...</h1>
                                <p className={"text-sm"}>No songs</p>
                            </div>
                        </Fragment>
                    )}
                    {playlist.id && (
                        <Fragment>
                            <div className={"mt-auto"}>
                                <p className={"uppercase mb-4 text-sm"}>Playlist</p>
                                <h1 className={"text-2xl md:text-4xl xl:text-7xl font-bold mb-4"}>{playlist?.name}</h1>
                                <p className={"text-sm"}><a className={"font-bold"} href={playlist?.owner?.href}>{playlist?.owner?.display_name}</a> • {playlist?.tracks?.total} songs</p>
                            </div>
                        </Fragment>
                    )}
                </section>
            </div>

            <div>
                <Songs/>
            </div>
        </div>
    )
}

export default Center
