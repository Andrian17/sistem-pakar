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
        $depresi = [
            [
                "kode_depresi" => "P001",
                "depresi" => "Gangguan Mood"
            ],
            [
                "kode_depresi" => "P002",
                "depresi" => "Depresi Ringan"
            ],
            [
                "kode_depresi" => "P003",
                "depresi" => "Depresi Sedang"
            ],
            [
                "kode_depresi" => "P004",
                "depresi" => "Depresi Berat"
            ],
        ];

        $gejala = [
            array(
                'kode_gejala' => 'G001',
                'gejala' => 'Merasa sedih',
            ),
            array(
                'kode_gejala' => 'G002',
                'gejala' => 'Kelelahan selakukan aktivitas',
            ),
            array(
                'kode_gejala' => 'G003',
                'gejala' => 'Kurang konsentrasi',
            ),
            array(
                'kode_gejala' => 'G004',
                'gejala' => 'Mudah Bosan',
            ),
            array(
                'kode_gejala' => 'G005',
                'gejala' => 'Sering Melamun',
            ),
            array(
                'kode_gejala' => 'G006',
                'gejala' => 'Tidak semangat',
            ),
            array(
                'kode_gejala' => 'G007',
                'gejala' => 'Merasa Risau',
            ),
            array(
                'kode_gejala' => 'G008',
                'gejala' => 'Pesimis',
            ),
            array(
                'kode_gejala' => 'G009',
                'gejala' => 'Sering menangis secara tiba-tiba',
            ),
            array(
                'kode_gejala' => 'G010',
                'gejala' => 'Gangguan Tidur',
            ),
            array(
                'kode_gejala' => 'G011',
                'gejala' => 'Cemas Berlebihan',
            ),
            array(
                'kode_gejala' => 'G012',
                'gejala' => 'Kecewa dengan diri sendiri',
            ),
            array(
                'kode_gejala' => 'G013',
                'gejala' => 'Terganggu dengan banyak hal',
            ),
            array(
                'kode_gejala' => 'G014',
                'gejala' => 'Sering murung',
            ),
            array(
                'kode_gejala' => 'G015',
                'gejala' => 'Kehilangan minat terhadap hoby',
            ),
            array(
                'kode_gejala' => 'G016',
                'gejala' => 'Merasa kesepian',
            ),
            array(
                'kode_gejala' => 'G017',
                'gejala' => 'Sering merasa bersalah',
            ),
            array(
                'kode_gejala' => 'G018',
                'gejala' => 'Merasa dihakimi',
            ),
            array(
                'kode_gejala' => 'G019',
                'gejala' => 'Membenci Diri Sendiri',
            ),
            array(
                'kode_gejala' => 'G020',
                'gejala' => 'Mudah tersinggung',
            ),
            array(
                'kode_gejala' => 'G021',
                'gejala' => 'Kehilangan Nafsu makan',
            ),
            array(
                'kode_gejala' => 'G022',
                'gejala' => 'Khawatir tentang penampilan',
            ),
            array(
                'kode_gejala' => 'G023',
                'gejala' => 'Mudah Marah',
            ),
            array(
                'kode_gejala' => 'G024',
                'gejala' => 'Suka menyendiri',
            ),
            array(
                'kode_gejala' => 'G025',
                'gejala' => 'Pikiran Untuk Bunuh Diri',
            ),
            array(
                'kode_gejala' => 'G026',
                'gejala' => 'Sulit mengambil keputusan',
            ),
            array(
                'kode_gejala' => 'G027',
                'gejala' => 'Sulit melakukan kegiatan dengan Baik',
            ),
            array(
                'kode_gejala' => 'G028',
                'gejala' => 'Ada penambahan dan penurunan berat badan',
            ),
            array(
                'kode_gejala' => 'G029',
                'gejala' => 'Kurang percaya diri',
            ),
        ];

        $keputusan = [
            'kode_keputusan' => 'K001',
            'kode_gejala' => 'G028',
            'kode_depresi' => 'P003',
            'mb' => 0.3,
            'md' => 0.4
        ];

        $cf = [
            [
                'kondisi' => 'Pasti Tidak',
                'cf' => -1.0,
            ],
            [
                'kondisi' => 'Hampir Pasti Tidak',
                'cf' => -0.8,
            ],
            [
                'kondisi' => 'Kemungkinan Besar Tidak',
                'cf' => -0.6,
            ],
            [
                'kondisi' => 'Mungkin Tidak',
                'cf' => -0.4,
            ],
            [
                'kondisi' => 'Tidak Tahu',
                'cf' => -0.2,
            ],
            [
                'kondisi' => 'Tidak Yakin',
                'cf' => 0.2,
            ],
            [
                'kondisi' => 'Mungkin',
                'cf' => 0.4,
            ],
            [
                'kondisi' => 'Kemungkinan Besar',
                'cf' => 0.6,
            ],
            [
                'kondisi' => 'Hampir Pasti',
                'cf' => 0.8,
            ],
            [
                'kondisi' => 'Pasti',
                'cf' => 1,
            ],
        ];

        $cf_user = [
            [
                "kondisi" => "Tidak",
                'nilai' => 0.0
            ],
            [
                "kondisi" => "Mungkin",
                'nilai' => 0.4
            ],
            [
                "kondisi" => "Kemungkinan Besar",
                'nilai' => 0.6
            ],
            [
                "kondisi" => "Hampir Pasti",
                'nilai' => 0.8
            ],
        ];


        Keputusan::create($keputusan);
        Gejala::insert($gejala);
        TingkatDepresi::insert($depresi);
        CertainFactor::insert($cf);
        KondisiUser::insert($cf_user);
    }
}
