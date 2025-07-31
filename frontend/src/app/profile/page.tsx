import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <div className="flex flex-col items-center space-y-4 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-500 dark:text-gray-400">john.doe@example.com</p>
        </div>
        <Button>Edit Profile</Button>
      </div>
      <div className="w-full max-w-md p-8 space-y-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Settings</h3>
        <div className="space-y-2">
          <Label htmlFor="notifications">Email Notifications</Label>
          {/* Add a switch component here later */}
        </div>
      </div>
    </div>
  );
}
