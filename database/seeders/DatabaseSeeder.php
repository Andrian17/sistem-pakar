<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\CertainFactor;
use App\Models\Gejala;
use App\Models\Keputusan;
use App\Models\KondisiUser;
use App\Models\TingkatDepresi;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $keputusan = new Keputusan();
        $gejala = new Gejala();
        $depresi = new TingkatDepresi();
        $cf = new CertainFactor();
        $kondisi = new KondisiUser();

        Keputusan::insert($keputusan->fillTable());
        Gejala::insert($gejala->fillTable());
        TingkatDepresi::insert($depresi->fillTable());
        CertainFactor::insert($cf->fillTable());
        KondisiUser::insert($kondisi->fillTable());
    }
}
