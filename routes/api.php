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
use App\Http\Controllers\MunicipioController;

use App\Http\Controllers\FotoActivController;
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


    //ECA    
    Route::get('/infoEca', [EcaController::class, 'index']);
    Route::get('/eca/{eca}', [EcaController::class, 'show']);
    Route::post('/eca');
    Route::post('/usuarios/eca', [EcaController::class, 'create']); // Crear espacios de culturas
    Route::get('/ecas', [EcaController::class, 'show']); // Información de los  ecas
    Route::get('/municipio', [EcaController::class, 'municipios']); // Información de los municipios
    Route::get('/estatu', [EcaController::class, 'estatus']); // Información de los estatus
    Route::put('/usuarios/eca/{id}', [EcaController::class, 'update']); // Modificar ecas

    // Programa_cultura
    Route::post('/create_program', [ProgramController::class, 'store']);
    Route::get('/infoProgram', [ProgramController::class, 'index']); // Informacion del programa de cultura
    Route::put('/update_program', [ProgramController::class, 'update']); // Actualizar un programa de cultura :)

    // Espacio de cultura
    Route::post('/create_espacio', [EspacioController::class, 'store']);
    Route::get('/espacio/check', [EspacioController::class, 'checkRegistroActual']);
    Route::get('/infoEspacio', [EspacioController::class, 'index']); // Informacion del espacio de cultura


    // Memoria fotografica
    Route::post('/create_memoria', [MemoriaFotoController::class, 'store']); // Crear una memoria
    Route::get('/getDesc', [MemoriaFotoController::class, 'index']); // Obtener la descripcion general de la memoria
    Route::get('/infoMemoria', [ActividadMemoController::class, 'index']); // Informacion de la memoria fotografica con sus actividades correspondiente

    // Actividades para la memoria fotografica
    Route::get('/getActivityById/{id}', [ActividadMemoController::class, 'actividadById']); // Obtener la inforamción de la actividad por su id
    Route::post('/create_activ', [ActividadMemoController::class, 'store']); // Crear una actividad
    Route::put('/update_activ', [ActividadMemoController::class, 'update']); // Actualizar una actividad


    //Oficio RNECA
    Route::post('/create_ofice', [OficiosRnecaController::class, 'store']); // Crear un oficio
    Route::get('/get_ofice', [OficiosRnecaController::class, 'index']);  // Información del oficio para el director
    Route::get('/documents/{id}', [OficiosRnecaController::class, 'download']); // Descargar un oficio
    Route::get('/getOficeByEca', [OficiosRnecaController::class, 'OficioRneca']); // Obtener los oficios para el ECA
    Route::get('/oficios', [OficiosRnecaController::class, 'oficios']); // Obtener los oficios
    Route::get('/oficiosPendientes', [OficiosRnecaController::class, 'oficiosPendientes']); // Obtener los oficios pendientes
    Route::get('/oficiosCorreccion', [OficiosRnecaController::class, 'oficiosCorreccion']); // Obtener los oficios con correcciones
    Route::get('/oficiosValidados', [OficiosRnecaController::class, 'oficiosValidados']); // Obtener los oficios con correcciones


    //Imagenes de la memoria
    Route::get('/getIdActividad/{id}', [FotoActivController::class, 'getImagenes']);
    Route::get('/fotos/{id}/archivo', [FotoActivController::class, 'ServirImg']);
    Route::delete('/delete_foto/{id}', [FotoActivController::class, 'destroy']);
    Route::post('/add_image', [FotoActivController::class, 'store']);


    // Usuarios
    Route::get('/usuarios/eca', [UsersController::class, 'showUserEcas']); // Información de los usuarios ecas
    Route::get('/usuarios/dicmun', [UsersController::class, 'showUserDicMun']); // Información de los directores de municipio
    Route::put('/usuarios/{id}', [UsersController::class, 'update']); // Modificar usuarios

    //Municipios
    Route::get('/municipios', [MunicipioController::class, 'index']); //Información de municipios
    Route::get('/municipios/buscar', [MunicipioController::class, 'buscar']); //Busqueda por municipio en texto
    Route::get('/municipios/select', [MunicipioController::class, 'buscarSelect']); //busqueda por municipio en el select

    // Eliminar una actividad de la memoria
    Route::delete('/delete_activ/{id}', [ActividadMemoController::class, 'destroy']);

    //Eliminar la memoria fotografica (Completa)
    Route::delete('/delete_memoria/{id}', [MemoriaFotoController::class, 'destroy']);

    //Eliminar el programa de cultura esto incluira las actividades de la memoria
    Route::delete('/delete_program/{id}', [ProgramController::class, 'destroy']);

    //Eliminar el espacio de cultura
    Route::delete('/delete_espacio/{id}', [EspacioController::class, 'destroy']);
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
