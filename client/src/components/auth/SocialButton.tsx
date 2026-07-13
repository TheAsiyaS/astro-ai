type SocialButtonProps = {
  text: string;
  icon: string;
  variant?: "light" | "dark";
};

export default function SocialButton({
  text,
  icon,
  variant = "dark",
}: SocialButtonProps) {
  return (
    <button
      className={`flex w-full items-center justify-center gap-3 rounded-2xl border px-6 py-4 text-lg font-medium transition-all duration-300 ${
        variant === "light"
          ? "border-white bg-white text-black hover:bg-gray-100"
          : "border-[#36574D] bg-[#102A27] text-white hover:bg-[#173632]"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <span>{text}</span>
    </button>
  );
}