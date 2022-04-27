import {getProviders, signIn} from "next-auth/react";

const Login = (params) => {
    const providers = params.providers;

    return (
        <div className={"flex flex-col items-center bg-black min-h-screen w-full justify-center"}>
            <img className={"w-52 mb-5"} alt={""} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"}/>
            {Object.values(providers ?? {}).map(provider => (
                    <div key={provider.id}>
                        <button key={provider.name} className={"bg-[#18D860] px-6 py-4 text-white rounded-full"} onClick={() => signIn(provider.id, {callbackUrl: "/"})}>
                            Login with {provider.name}
                        </button>
                    </div>
                )
            )}
        </div>
    )
}

export const getServerSideProps = async () => {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default Login
