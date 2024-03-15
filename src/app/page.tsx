import Image from "next/image";
import welcomeImage from "../../public/welcomeImage.png";

export default function Home() {
    return (
        <div className="flex flex-col items-center content-center justify-center h-full" style={{height: "100vh"}}>
            <div className=" text-center p-5" style={{width: "50%"}}>
                <h2 className="text-2xl font-bold mb-4">Welcome</h2>
                <div className="flex justify-center">
                    <Image src={welcomeImage} style={{width: "50%"}}/>
                </div>
            </div>
        </div>
    );
}
