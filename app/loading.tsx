import { Spinner } from "@nextui-org/react";
import RamenLoader from "./components/rive/ramenLoading";


export default function Loading() {
    return (
        <div className="h-screen w-full flex flex-cols justify-center ">
          
                <div className="flex items-center">
                    <RamenLoader />
                </div>
           
        </div>
    )
}