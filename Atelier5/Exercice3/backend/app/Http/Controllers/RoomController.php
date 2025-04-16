<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rooms;
use Exception;

class RoomController extends Controller
{
    public function createRoom(Request $request) {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'capacity' => 'required|integer|min:1'
            ]);

            $room = Rooms::create($request->only(['name', 'capacity']));
            return response()->json($room, 201);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function deleteRoom(Request $request) {
        try {
            $room = Rooms::findOrFail($request->id);
            $room->delete();
            return response()->json(['message' => 'Room deleted successfully']);
        } catch (Exception $e) {
            return response()->json(['error' => 'Room not found'], 404);
        }
    }

    public function updateRoom(Request $request, $id) {
        try {
            $room = Rooms::findOrFail($id);

            $request->validate([
                'name' => 'required|string|max:255',
                'capacity' => 'required|integer|min:1'
            ]);
            
            $room->name = $request->name;
            $room->capacity = $request->capacity;
            
            $room->save();
            
            return response()->json($room, 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Room not found'], 404);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getRoom(Request $request) {
        try {
            $room = Rooms::findOrFail($request->id);
            return response()->json($room);
        } catch (Exception $e) {
            return response()->json(['error' => 'Room not found'], 404);
        }
    }

    public function listRooms() {
        try {
            $rooms = Rooms::all();
            return response()->json($rooms);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to fetch rooms'], 500);
        }
    }
}
