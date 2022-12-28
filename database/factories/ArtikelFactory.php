<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Artikel>
 */
class ArtikelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "url_gambar" => $this->faker->imageUrl(640, 480, 'emotion'),
            "kode_depresi" => "P002",
            "isi" => $this->faker->text(600),
            "judul" => $this->faker->text(80)
        ];
    }
}
