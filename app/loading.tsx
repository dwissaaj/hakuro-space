import RamenLoader from "./components/rive/ramenLoading";

export default function Loading() {
  return (
    <div className="h-screen flex flex-cols justify-center ">
      <div className="flex items-center">
        <RamenLoader />
      </div>
    </div>
  );
}
