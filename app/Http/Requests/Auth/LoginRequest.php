<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    // 1. Cambia esto a true para permitir que se use la validación
    public function authorize(): bool
    {
        return true;
    }

    // 2. Aquí defines tus reglas propias
    public function rules(): array
    {
        return [
            'correo'   => 'required|email|exists:usuarios,correo',
            'password' => 'required|string|min:4',
        ];
    }

    // 3. Aquí personalizas los mensajes que verá el usuario
    public function messages(): array
    {
        return [
            'correo.required' => 'El correo electrónico es obligatorio.',
            'correo.email'    => 'Por favor, ingresa una dirección de correo válida.',
            'correo.exists'   => 'Este correo no está registrado en nuestro sistema.',
            'password.required' => 'La contraseña es obligatoria.',
            'password.min'      => 'La contraseña debe tener al menos 4 caracteres.',
        ];
    }
}
