<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CertainFactor extends Model
{
    use HasFactory;
    protected $table = 'certain_factor';

    public function fillTable()
    {
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
        return $cf;
    }
}
