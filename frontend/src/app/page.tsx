import { AddCameraModal } from "@/components/AddCameraModal";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Cameras</h1>
        <AddCameraModal />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Placeholder for camera feeds */}
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
          <div className="aspect-video bg-black text-white flex items-center justify-center">
            Camera 1 Feed
          </div>
          <div className="mt-2 font-bold">Camera 1</div>
          <div className="text-sm text-gray-500">Location: Entrance</div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
          <div className="aspect-video bg-black text-white flex items-center justify-center">
            Camera 2 Feed
          </div>
          <div className="mt-2 font-bold">Camera 2</div>
          <div className="text-sm text-gray-500">Location: Warehouse</div>
        </div>
      </div>
    </div>
  );
}
