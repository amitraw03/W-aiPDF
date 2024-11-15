import { SignUp } from '@clerk/nextjs'


export default function Page() {
    return (
      <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800">
      {/* Background Design Elements */}
      <div className="absolute inset-0 bg-[url('/path/to/your/image.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-gray-900 opacity-70"></div>

      {/* Sign-In Component Styling */}
      <div className="z-10 p-6 bg-gray-800/60 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700">
        <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">Welcome Back!</h2>
        <SignUp />
      </div>

      {/* Accent Circle for Visual Appeal */}
      <div className="absolute w-72 h-72 bg-orange-600 rounded-full blur-3xl opacity-20 top-1/4 left-1/4"></div>
    </div>

    )
}