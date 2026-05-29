<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login']);

Route::get('/prueba', function () {
    return response()->json([
        'message' => '¡Hola, esta es una ruta de prueba!',
        'status' => 200
    ], 200);
});


Route::get('/users', [UsersController::class, 'index']);
Route::get('/users', [UsersController::class, 'show']);
Route::post('/users', [UsersController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);