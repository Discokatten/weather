import Spinner from "@/app/components/spinner";

export default function Loading() {
  return (
    <div className="  bg-theme-600 rounded-2xl h-500 md:w-240">
      <Spinner />
    </div>
  );
}
