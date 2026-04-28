<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('user_id');
            $table->string('google_id', 255)->unique()->nullable();
            $table->string('email', 100)->unique()->notNull();
            $table->string('nim', 15)->unique()->notNull();
            $table->string('name', 150)->notNull();
            $table->enum('role', ['super_admin', 'admin', 'anggota'])->notNull();
            $table->enum('status', ['aktif', 'non-aktif'])->notNull()->default('aktif');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
