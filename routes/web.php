<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController; // Importa tu AuthController


Route::middleware('guest')->get('/', function () {
    return Inertia::render('Login');
})->name('login'); // Nombramos esta ruta como 'login'

Route::middleware(['auth:sanctum', 'no-cache'])->group(function () {

    Route::get('/inicio_eca', function () { // Esta ruta es para el rol 'rol1' (ECA)
        return Inertia::render('VECA_Inicio');
    })->middleware('check.role:rol1')->name('inicio_eca');

    Route::get('/inicio_dicm', function () { // Esta ruta es para el rol 'rol2' (Dicm)
        return Inertia::render('DicM_Inicio');
    })->middleware('check.role:rol2')->name('inicio_dicm');

    Route::get('/inicio_ceaa', function () { // Esta ruta es para el rol 'rol5' (CEAA)
        return Inertia::render('CEAA_Inicio');
    })->middleware('check.role:rol5')->name('inicio_ceaa');
});


/*
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
*/


// Eliminamos la inclusión de las rutas de autenticación de Breeze para evitar conflictos
// require __DIR__.'/auth.php';
