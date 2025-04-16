<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

use App\Http\Controllers\FileController;

Route::get('/files', [FileController::class, 'listFiles']);
Route::post('/upload', [FileController::class, 'upload']);

