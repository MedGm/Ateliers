<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stock;
use App\Events\StockUpdated;

class StockController extends Controller
{
    public function index()
    {
        return Stock::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_name' => 'required|string|max:255',
            'quantity' => 'required|integer|min:0',
        ]);

        $stock = new Stock();
        $stock->product_name = $request->product_name;
        $stock->quantity = $request->quantity;
        $stock->save();
        
        broadcast(new StockUpdated($stock))->toOthers();
        
        return response()->json($stock, 201);
    }

    public function show($id)
    {
        $stock = Stock::findOrFail($id);
        return response()->json($stock);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'product_name' => 'required|string|max:255',
            'quantity' => 'required|integer|min:0',
        ]);
        
        $stock = Stock::findOrFail($id);
        $stock->product_name = $request->product_name;
        $stock->quantity = $request->quantity;
        $stock->save();
        
        broadcast(new StockUpdated($stock))->toOthers();
        
        return response()->json($stock);
    }

    public function destroy($id)
    {
        $stock = Stock::findOrFail($id);
        $stock->delete();
        
        broadcast(new StockUpdated($stock))->toOthers();
        
        return response()->json(null, 204);
    }
}
