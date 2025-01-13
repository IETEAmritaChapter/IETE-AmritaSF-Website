// pages/index.js
import ProfileCard from "@/app/components/profilecard";
import VerticalCard from "../components/verticalcard";

export default function Home() {
  return (
    <div className="p-8">
      {/* Profile Cards Row */}
      <div className="flex flex-wrap justify-between gap-4 mb-8">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>

      {/* Vertical Cards Row */}
      <div className="flex flex-wrap justify-between gap-4">
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </div>
    </div>
  );
}
