<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Users extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'usuarios';
    protected $primaryKey = 'id_usuario';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';

    protected $fillable =[
        'id_usuario',
        'nombre',
        'correo',
        'telefono',
        'password',
        'id_rol',
    ];

    protected $hidden = [
        'password',
    ];

    // Estas funciones actúan como tus consultas de validación
    public function esEca(): bool
    {
        return $this->id_rol === 'rol1';
    }

    public function esDicm(): bool
    {
        return $this->id_rol === 'rol2';
    }

    public function esLic(): bool
    {
        return $this->id_rol === 'rol3';
    }

    public function esSubdi(): bool
    {
        return $this->id_rol === 'rol4';
    }

    public function esCeaa(): bool
    {
        return $this->id_rol === 'rol5';
    }
}

?>
