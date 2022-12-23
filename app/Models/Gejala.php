<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gejala extends Model
{
    use HasFactory;
    protected $table = 'gejala';
    protected $guard = ["id"];
    protected $fillable = ["kode_gejala", "gejala"];

    public function fillTable()
    {
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
        return $gejala;
    }
}
