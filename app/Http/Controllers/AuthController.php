<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        // Implementasi logic login Anda di sini
        // Contoh validasi:
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // TODO: Tambahkan logic autentikasi (DB query, etc)

        return redirect('/')->with('message', 'Login berhasil!');
    }
}
