<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\AuthController;
use Inertia\Inertia;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EcaController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\EspacioController;
use App\Http\Controllers\MemoriaFotoController;
use App\Http\Controllers\ActividadMemoController;
use App\Http\Controllers\OficiosRnecaController;



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

// Agregamos el middleware para asegurar que auth()->user() no sea null
Route::middleware(['auth:sanctum'])->group(function () {
    
    //METODOS POST
    //ECA    
    Route::get('/infoEca', [EcaController::class, 'index']);
    Route::get('/eca/{eca}', [EcaController::class, 'show']);
    Route::post('/eca');

    // Programa_cultura
    Route::post('/create_program', [ProgramController::class, 'store']);

    // Espacio de cultura
    Route::post('/create_espacio', [EspacioController::class, 'store']);
    Route::get('/espacio/check', [EspacioController::class, 'checkRegistroActual']);

    // Memoria fotografica
    Route::post('/create_memoria', [MemoriaFotoController::class, 'store']);

    // Actividades para la memoria fotografica
    Route::post('/create_activ', [ActividadMemoController::class, 'store']);

    //Oficio RNECA
    Route::post('/create_ofice', [OficiosRnecaController::class, 'store']);

    //METODOS GET
    // Informacion del espacio de cultura
    Route::get('/infoEspacio', [EspacioController::class, 'index']);

    // Informacion del programa de cultura
    Route::get('/infoProgram', [ProgramController::class, 'index']);

    // Informacion de la memoria fotografica
    Route::get('/infoMemoria', [ActividadMemoController::class, 'index']);

    // Informacion de la actividad
    Route::get('/infoActiv', [ActividadMemoController::class, 'index']);

    // Información del oficio
    Route::get('/get_ofice', [OficiosRnecaController::class, 'index']);



    //METODOS DELETE
    // Eliminar una actividad de la memoria
    Route::delete('/delete_activ/{id}', [ActividadMemoController::class, 'destroy']);

    //Eliminar la memoria fotografica (Completa)
    Route::delete('/delete_memoria/{id}', [MemoriaFotoController::class, 'destroy']);

    //Eliminar el programa de cultura esto incluira las actividades de la memoria
    Route::delete('/delete_program/{id}', [ProgramController::class, 'destroy']);

    //Eliminar el espacio de cultura
    Route::delete('/delete_espacio/{id}', [EspacioController::class, 'destroy']);
    
});

    // Route::get('/pdf', [OficiosRnecaController::class, 'indexPdf']);
    // Route::get('/informe', [ProgramController::class, 'generarInforme']);

    Route::get('/documents/{id}', [OficiosRnecaController::class, 'download']);



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
