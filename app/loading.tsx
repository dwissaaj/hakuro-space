import { Spinner } from "@nextui-org/react";


export default function Loading() {
    return (
        <div className="h-screen w-full flex flex-cols justify-center ">
          
                <div className="flex items-center">
                    <Spinner size="lg" label="Wait A Minute" color="secondary" />
                </div>
           
        </div>
    )
}