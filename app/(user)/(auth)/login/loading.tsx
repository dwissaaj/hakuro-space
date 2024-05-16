import { Spinner } from "@nextui-org/react";


export default function Loading() {
    return (
        <div className="mt-12 h-screen w-full flex  justify-center ">
                <div className="m-auto">
                    <Spinner size="lg" label="Wait A Minute" color="secondary" />
                </div>
        </div>
    )
}