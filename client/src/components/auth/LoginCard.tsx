import Image from "next/image";
import SocialButton from "./SocialButton";

export default function LoginCard() {
  return (
    <div className="w-[520px] rounded-[32px] border border-[#24483F] bg-[#0B2B26]/85 p-10 backdrop-blur-xl">

      {/* Logo */}

      <div className="mb-10 flex justify-center">
        <Image
          src="/Logo.png"
          alt="ASTRO"
          width={42}
          height={42}
        />
      </div>

      {/* Heading */}

      <h1 className="text-center text-5xl font-bold text-white">
        Welcome Back
      </h1>

      <p className="mt-5 text-center text-lg leading-7 text-[#8FB7A2]">
        Sign in to access your AI workspace
        <br />
        and continue building the future.
      </p>

      {/* Buttons */}

      <div className="mt-10 space-y-5">
        <SocialButton
          icon="🟢"
          text="Continue with Google"
          variant="light"
        />

        <SocialButton
          icon="⚫"
          text="Continue with GitHub"
        />
      </div>

      {/* Divider */}

      <div className="my-8 flex items-center gap-5">
        <div className="h-px flex-1 bg-[#33544A]" />
        <span className="text-sm uppercase tracking-[4px] text-[#7A9C8F]">
          OR
        </span>
        <div className="h-px flex-1 bg-[#33544A]" />
      </div>

      <SocialButton
        icon="✉️"
        text="Sign up with Email"
      />

      {/* Footer */}

      <p className="mt-10 text-center text-sm text-[#7FA193]">
        🔒 Your data is secure and encrypted
      </p>
    </div>
  );
}