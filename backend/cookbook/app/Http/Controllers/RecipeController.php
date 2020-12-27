<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\Instruction;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class RecipeController extends Controller
{
    public function index()
    {
        return Recipe::all();
    }

    public function show(Recipe $recipe)
    {
        $data = $recipe;
        $data->instruction;
        $data->ingredient;
        return $data;

    }

    public function store(Request $request)
    {
        // request()->validate([
        //     ''
        // ])

        $validator = Validator::make(request()->all(),[
            'title' => 'required',
            'people' => 'integer|min:0',
            'ingredients.*.name' => 'required',
            'ingredients.*.qnty' => 'numeric|nullable|min:0',
            'ingredients.*.unit' => 'alpha_dash|nullable',
            'instructies.*.beschrijving' => 'required',
            'imagepath' => 'nullable',
            'source' => 'nullable'
        ]);
        if($validator->fails()) {
            return response()->json($validator->messages(),422);
        }
        $recipe = Recipe::create([
            'title' => request('title'),
            'people' => request('people'),
            'image' => request('imagepath'),
            'source' => request('source')
        ]);

        foreach (request('instructies') as $index => $instructie) {
            Instruction::create([
                'recipe_id' => $recipe->id,
                'instruction' => $instructie['beschrijving'],
                'step' => $index
            ]);
        }

        foreach (request('ingredients') as $index => $ingredient) {
            Log::info($ingredient);
            Ingredient::create([
                'recipe_id' => $recipe->id,
                'ingredient' => $ingredient['name'],
                'unit' => $ingredient['unit'] ?? null,
                'quantity' => $ingredient['qnty'] ?? null,
                'importance' => $index
            ]);
        }
        return response()->json($request,201);
    }

    public function image() 
    {
        $validator = Validator::make(request()->all(),[
            'image' => 'nullable|image'
        ]);
        if($validator->fails()) {
            return response()->json($validator->messages(),422);
        }
        $path = request()->file('image')->store('recipe-images');
        return response()->json($path,201);
    }
}
