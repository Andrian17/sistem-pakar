<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Artikel;
use App\Models\CertainFactor;
use App\Models\Gejala;
use App\Models\Keputusan;
use App\Models\KondisiUser;
use App\Models\TingkatDepresi;
use Illuminate\Database\Seeder;
use PhpParser\Node\Expr\New_;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(3)->create();
        // Artikel::factory(4)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $keputusan = new Keputusan();
        $gejala = new Gejala();
        $depresi = new TingkatDepresi();
        $kondisi = new KondisiUser();

        $artikel = new Artikel();

        Keputusan::insert($keputusan->fillTable());
        Gejala::insert($gejala->fillTable());
        TingkatDepresi::insert($depresi->fillTable());
        KondisiUser::insert($kondisi->fillTable());
        Artikel::insert($artikel->fillTabel());
    }
}
