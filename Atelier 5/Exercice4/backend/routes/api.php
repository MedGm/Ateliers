<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

use App\Http\Controllers\StockController;

Route::get('/stocks', [StockController::class, 'index']);
Route::post('/stocks', [StockController::class, 'store']);
Route::get('/stocks/{id}', [StockController::class, 'show']);
Route::put('/stocks/{id}', [StockController::class, 'update']);
Route::delete('/stocks/{id}', [StockController::class, 'destroy']);