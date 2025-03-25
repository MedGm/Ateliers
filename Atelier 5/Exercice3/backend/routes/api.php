<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


use App\Http\Controllers\RoomController;

Route::post('/createRoom', [RoomController::class, 'createRoom']);
Route::delete('/deleteRoom/{id}', [RoomController::class, 'deleteRoom']);
Route::put('/updateRoom/{id}', [RoomController::class, 'updateRoom']);
Route::get('/getRoom/{id}', [RoomController::class, 'getRoom']);
Route::get('/listRooms', [RoomController::class, 'listRooms']);