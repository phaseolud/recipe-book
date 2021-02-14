<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;
use Illuminate\Support\Facades\Validator;


class TagController extends Controller
{
    public function index()
    {
        return Tag::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make(request()->all(),[
            'tag' => 'required'
        ]);
        if($validator->fails()) {
            return response()->json($validator->messages(),422);
        }
        $tag = Tag::create([
            'name' => request('tag')
        ]);

        return response()->json(Tag::all(),201);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();
        return response()->json(Tag::all(),204);

    }
}
