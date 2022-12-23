<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KondisiUser extends Model
{
    use HasFactory;
    // protected $table = 'kondisi_users';

    public function fillTable()
    {
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
        return $cf_user;
    }
}
