import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function AuthLayout() {
  return (
    <main className="flex h-screen w-full overflow-hidden bg-[#051F20]">
      <div className="w-1/2">
        <LeftSection />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <RightSection />
      </div>
    </main>
  );
}