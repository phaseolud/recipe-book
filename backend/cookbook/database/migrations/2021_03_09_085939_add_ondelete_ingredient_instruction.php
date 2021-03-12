<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOndeleteIngredientInstruction extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ingredients', function (Blueprint $table) {
            DB::statement("ALTER TABLE ingredients ADD CONSTRAINT FK_ingredients FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE;");

        });
        Schema::table('instructions', function (Blueprint $table) {
            DB::statement("ALTER TABLE instructions ADD CONSTRAINT FK_instructions FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE;");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
