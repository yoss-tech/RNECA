<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EcaController;


Route::get('/', function () {
    return Inertia::render('Login');
});

Route::get('/register', [UsersController::class, 'create'])->name('register');

Route::get('/prueba', function () {
    return response()->json([
        'message' => '¡Hola, esta es una ruta de prueba!',
        'status' => 200
    ], 200);
});

// USUARIOS
Route::get('/users', [UsersController::class, 'index']);
Route::get('/users/{user}', [UsersController::class, 'show']);
Route::post('/users', [UsersController::class, 'store']);

// ECA
// Agregamos el middleware para asegurar que auth()->user() no sea null
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/infoEca', [EcaController::class, 'index']);
    Route::get('/eca/{eca}', [EcaController::class, 'show']);
    Route::post('/eca');
});

// El login se maneja a través de AuthController vinculado en auth.php
Route::post('/login', [AuthController::class, 'login'])->name('api.login');
Route::post('/logout', [AuthController::class, 'logout'])->name('api.logout');
Route::get('/check-auth', [AuthController::class, 'checkAuth'])->name('api.checkAuth');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'no-cache'])->name('dashboard');

Route::middleware(['auth', 'no-cache'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
