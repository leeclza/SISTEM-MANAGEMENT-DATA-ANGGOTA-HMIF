<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Ubah nim jadi nullable karena Google tidak provide NIM
            // NIM akan diisi manual oleh user atau admin setelah login
            $table->string('nim', 15)->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('nim', 15)->nullable(false)->change();
        });
    }
};