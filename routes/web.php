<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('guest')->get('/', function () {
    return Inertia::render('Login');
})->name('login'); // Nombramos esta ruta como 'login'

Route::middleware(['auth:sanctum', 'no-cache'])->group(function () {
    Route::get('/inicio', function () {
        $dashboardRoute = match (auth()->user()->id_rol) {
            'rol1' => 'inicio_eca',
            'rol2' => 'inicio_dicm',
            'rol3' => 'inicio_lic',
            'rol4' => 'inicio_admin',
            'rol5' => 'inicio_ceaa',
            default => null,
        };

        abort_if(! $dashboardRoute, 403, 'No tienes permiso para acceder a esta página.');

        return redirect()->route($dashboardRoute);
    })->name('inicio');

    Route::get('/inicio_eca', function () { // Esta ruta es para el rol 'rol1' (ECA)
        return Inertia::render('Vista_ECA/VECA_Inicio');
    })->middleware('check.role:rol1')->name('inicio_eca');

    Route::get('/inicio_dicm', function () { // Esta ruta es para el rol 'rol2' (Dicm)
        return Inertia::render('Vista_Direc_Mun/DicM_Inicio');
    })->middleware('check.role:rol2')->name('inicio_dicm');

    Route::get('/inicio_lic', function () { // Esta ruta es para el rol 'rol3' (Lic)
        return Inertia::render('Vista_Lic_CEAA/Lic_Inicio');
    })->middleware('check.role:rol3')->name('inicio_lic');

    Route::get('/inicio_admin', function () { // Esta ruta es para el rol 'rol4' (Subdi)
        return Inertia::render('Vista_Administrador/Admi_Inicio');
    })->middleware('check.role:rol4')->name('inicio_admin');

    Route::get('/inicio_ceaa', function () { // Esta ruta es para el rol 'rol5' (CEAA)
        return Inertia::render('Vista_CEAA/CEAA_Inicio');
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
