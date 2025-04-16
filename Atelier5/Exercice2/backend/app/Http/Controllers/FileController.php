<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function listFiles()
    {
        $files = Storage::files('public/uploads');
        $urls = array_map(function ($file) {
            return asset(Storage::url($file));
        }, $files);
        return response()->json($urls);
    }

    public function upload(Request $request) {
        if (!$request->hasFile('file')) {
            return response()->json(['error' => 'No file uploaded'], 400);
        }
        
        $file = $request->file('file');
        $path = $file->storeAs('public/uploads', $file->getClientOriginalName());
        
        return response()->json([
            'message' => 'Fichier chargé avec succès',
            'path' => Storage::url($path)
        ]);
    }
}
