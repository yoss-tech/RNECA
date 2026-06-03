<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;
use App\Http\Controllers\ProfileController;

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

Route::get('/users', [UsersController::class, 'index']);
// Corregimos la ruta show para que acepte un parámetro
Route::get('/users/{user}', [UsersController::class, 'show']);
Route::post('/users', [UsersController::class, 'store']);

// El login se maneja a través de AuthController vinculado en auth.php o aquí
Route::post('/login', [AuthController::class, 'login'])->name('api.login');
Route::post('/logout', [AuthController::class, 'logout'])->name('api.logout');
Route::get('/check-auth', [AuthController::class, 'checkAuth'])->name('api.checkAuth');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
