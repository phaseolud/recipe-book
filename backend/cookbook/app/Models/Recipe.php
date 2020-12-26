<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function ingredient()
    {
        return $this->hasMany(Ingredient::class);
    }

    public function instruction()
    {
        return $this->hasMany(Instruction::class);
    }
}
