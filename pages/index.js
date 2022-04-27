import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import {getSession} from "next-auth/react";
import Player from "../components/Player";
import {Fragment} from "react";
import Head from "next/head";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Spotify V2</title>
            </Head>

            <div className={"bg-black h-screen overflow-hidden"}>
                <main className={"flex"}>
                    <Sidebar/>
                    <Center />
                </main>

                <div className={"sticky bottom-0"}>
                    <Player/>
                </div>
            </div>
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session
        },
    }
}