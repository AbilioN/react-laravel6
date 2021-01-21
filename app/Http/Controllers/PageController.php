<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
    
        return Inertia::render('Homepage', []);
        
    }

    public function teste()
    {
        $array = [
            "nome" => "Tancredo",
            "sobrenome" => "Ggzud22o"
        ];
        return Inertia::render('Teste' , $array);
    }
}
