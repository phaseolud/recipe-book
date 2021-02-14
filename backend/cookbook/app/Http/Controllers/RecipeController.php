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
        $data->tags;
        return $data;

    }

    public function store(Request $request)
    {
        $validator = Validator::make(request()->all(),[
            'title' => 'required',
            'tag' => 'nullable|array|exists:tags,id',
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
        $recipe->tags()->sync($request->input('tag'));

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

    public function update(Recipe $recipe)
    {
        $validator = Validator::make(request()->all(),[
            'title' => 'required',
            'tag' => 'nullable|array|exists:tags,id',
            'people' => 'integer|min:0',
            'ingredients.*.ingredient' => 'required',
            'ingredients.*.quantity' => 'numeric|nullable|min:0',
            'ingredients.*.unit' => 'alpha_dash|nullable',
            'instructies.*.instruction' => 'required',
            'imagepath' => 'nullable',
            'source' => 'nullable'
        ]);

        if($validator->fails()) {
            return response()->json($validator->messages(),422);
        }
        $recipe->tags()->sync(request('tag'));
        $recipe->title = request('title');
        $recipe->people = request('people');
        if(request('imagepath')) $recipe->image = request('imagepath');
        $recipe->source = request('source');
        $recipe->save();

        foreach (request('instructies') as $index => $instructie) {
            Instruction::updateOrCreate([
                'recipe_id' => $recipe->id,
                'instruction' => $instructie['instruction'],
                'step' => $index
            ]);
        }

        foreach (request('ingredients') as $index => $ingredient) {
            Ingredient::updateOrCreate([
                'recipe_id' => $recipe->id,
                'ingredient' => $ingredient['ingredient'],
                'unit' => $ingredient['unit'] ?? null,
                'quantity' => $ingredient['quantity'] ?? null,
                'importance' => $index
            ]);
        }

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
