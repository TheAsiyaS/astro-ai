import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function AuthLayout() {
  return (
    <main className="flex h-screen w-screen bg-[#051F20]">
      <LeftSection />
      <RightSection />
    </main>
  );
}