import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] flex items-center justify-center bg-gray-50">
      
      {/* BOX */}
      <div className="w-full max-w-6xl h-[70vh] bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* IMAGE */}
        <div className="relative w-full h-64 md:h-full md:w-1/2">
          <Image
            src="/loginBg.png"
            alt="login background"
            fill
            className="object-cover"
          />
        </div>

        {/* FORM */}
        <div className="flex flex-col justify-center gap-6 p-10 md:w-1/2 lg:p-16">
          
          <h1 className="text-2xl font-bold xl:text-4xl">
            Welcome 👋
          </h1>

          <p className="text-gray-500">
            Log into your account or create a new one using social buttons
          </p>

          {/* GOOGLE */}
          <button className="flex items-center justify-center gap-4 p-4 ring-1 ring-orange-200 rounded-md hover:bg-orange-50 transition">
            <Image
              src="/google.png"
              alt="google"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>

          {/* FACEBOOK */}
          <button className="flex items-center justify-center gap-4 p-4 ring-1 ring-blue-200 rounded-md hover:bg-blue-50 transition">
            <Image
              src="/facebook.png"
              alt="facebook"
              width={22}
              height={22}
            />
            <span>Sign in with Facebook</span>
          </button>

          <p className="text-sm text-gray-500">
            Have a problem?
            <Link className="underline ml-1" href="/">
              Contact us
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;