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
        'id_rol',
        'password',
    ];
}

?>
