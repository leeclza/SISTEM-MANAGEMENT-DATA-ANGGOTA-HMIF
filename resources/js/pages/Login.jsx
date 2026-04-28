import React from "react";

export default function Login() {
    // Fungsi ini redirect user ke endpoint Laravel
    // yang nantinya akan redirect ke halaman login Google
    const handleGoogleLogin = () => {
        window.location.href = "/auth/google";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Login HMIF ITERA
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Gunakan akun Google ITERA kamu
                    </p>
                </div>

                {/* Tombol login Google */}
                <button
                    onClick={handleGoogleLogin}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Login dengan Google
                </button>
            </div>
        </div>
    );
}