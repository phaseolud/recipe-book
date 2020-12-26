<?php

use App\Http\Controllers\RecipeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Recipe;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('recipes',[RecipeController::class,'index']);
Route::post('recipes',[RecipeController::class,'store']);
Route::post('recipes/upload-image',[RecipeController::class,'image']);
Route::get('recipes/{recipe}',[RecipeController::class,'show']);