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


        $gejala2 = [
            [
                "kode_gejala" => "G001",
                "gejala" => "Sering Merasa Sedih"
            ],
            [
                "kode_gejala" => "G002",
                "gejala" => "Sering kelelahan melakukan aktifitas ringan"
            ],
            [
                "kode_gejala" => "G003",
                "gejala" => "Kurang konsentrasi dalam belajar "
            ],
            [
                "kode_gejala" => "G004",
                "gejala" => "Mudah merasa bosan"
            ],
            [
                "kode_gejala" => "G005",
                "gejala" => "Sering Melamun"
            ],
            [
                "kode_gejala" => "G006",
                "gejala" => "Tidak semangat melakukan sesuatu"
            ],
            [
                "kode_gejala" => "G007",
                "gejala" => "Merasa Risau"
            ],
            [
                "kode_gejala" => "G008",
                "gejala" => "Pesimis"
            ],
            [
                "kode_gejala" => "G009",
                "gejala" => "Sering menangis secara tiba-tiba"
            ],
            [
                "kode_gejala" => "G010",
                "gejala" => "Gangguan susah Tidur"
            ],
            [
                "kode_gejala" => "G011",
                "gejala" => "Merasa Cemas Berlebihan"
            ],
            [
                "kode_gejala" => "G012",
                "gejala" => "Kecewa dengan diri sendiri"
            ],
            [
                "kode_gejala" => "G013",
                "gejala" => "Terganggu dengan banyak hal"
            ],
            [
                "kode_gejala" => "G014",
                "gejala" => "Sering murung"
            ],
            [
                "kode_gejala" => "G015",
                "gejala" => "Kehilangan minat terhadap hoby"
            ],
            [
                "kode_gejala" => "G016",
                "gejala" => "Merasa kesepian"
            ],
            [
                "kode_gejala" => "G017",
                "gejala" => "Sering merasa bersalah"
            ],
            [
                "kode_gejala" => "G018",
                "gejala" => "Merasa dihakimi"
            ],
            [
                "kode_gejala" => "G019",
                "gejala" => "Membenci Diri Sendiri"
            ],
            [
                "kode_gejala" => "G020",
                "gejala" => "Mudah tersinggung"
            ],
            [
                "kode_gejala" => "G021",
                "gejala" => "Kehilangan Nafsu makan "
            ],
            [
                "kode_gejala" => "G022",
                "gejala" => "Khawatir tentang penampilan"
            ],
            [
                "kode_gejala" => "G023",
                "gejala" => "Mudah Marah"
            ],
            [
                "kode_gejala" => "G024",
                "gejala" => "Suka menyendiri"
            ],
            [
                "kode_gejala" => "G025",
                "gejala" => "Pikiran Untuk Bunuh Diri"
            ],
            [
                "kode_gejala" => "G026",
                "gejala" => "Sulit mengambil keputusan"
            ],
            [
                "kode_gejala" => "G027",
                "gejala" => "Sulit melakukan kegiatan dengan Baik"
            ],
            [
                "kode_gejala" => "G028",
                "gejala" => "Ada penambahan dan penurunan berat badan"
            ],
            [
                "kode_gejala" => "G029",
                "gejala" => "Kurang percaya diri"
            ],
        ];

        return $gejala2;
    }
}
