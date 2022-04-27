import {useSelector} from "react-redux";
import {RewindIcon, SwitchHorizontalIcon} from "@heroicons/react/outline";
import {PauseIcon, PlayIcon, ReplyIcon} from "@heroicons/react/solid";
import Styles from './Player.module.css';

const Player = () => {
    const track = useSelector(state => state.song.track);
    const isPlaying = useSelector(state => state.song.isPlaying);
    const color = useSelector(state => state.ui.color);
    
    const playAndResume = () => {

    }

    const next = () => {

    }

    const prev = () => {

    }

    const shuffle = () => {

    }

    const repeat = () => {

    }

    return (
        <div className={`border-t border-gray-500 bg-gradient-to-br ${color.gradient} to-black text-white grid grid-cols-3 text-xs md:text-base p-2 md:p-3`}>
            <div className={"flex items-center space-x-2"}>
                {!track.album ? (
                    <div className={"h-16 w-16 rounded-md skeleton"}></div>
                ) : (
                    <img className={"h-16 w-16 rounded-md"} src={track?.album?.images?.[0]?.url} alt={""}/>
                )}
                <div>
                    <p className={"text-md"}>{track.name}</p>
                    <p className={"text-sm text-gray-300"}>{track?.artists?.map(artist => artist.name).join(", ")}</p>
                </div>
            </div>

            <div className={"flex flex-col justify-center items-center space-y-3"}>
                <div className={"flex justify-center items-center space-x-16"}>
                    <div>
                        <SwitchHorizontalIcon className={Styles.button}/>
                    </div>
                    <div>
                        <RewindIcon className={Styles.button}/>
                    </div>
                    <div>
                        {!isPlaying ? (<PlayIcon className={`w-10 h-10 ${Styles.buttonPlayPause}`}/>) : (<PauseIcon className={`w-10 h-10 ${Styles.buttonPlayPause}`}/>)}
                    </div>
                    <div>
                        <RewindIcon className={`${Styles.button} rotate-180`}/>
                    </div>
                    <div>
                        <ReplyIcon className={Styles.button}/>
                    </div>
                </div>
                {/*  Progress bar  */}
                <div className={"flex w-full"}>
                    <div className={"h-1.5 rounded-xl w-full bg-gray-500"}></div>
                </div>
            </div>

            <div className={"flex"}>

            </div>
        </div>
    )
}

export default Player
