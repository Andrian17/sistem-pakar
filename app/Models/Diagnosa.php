<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diagnosa extends Model
{
    use HasFactory;
    protected $table = 'diagnosas';

    protected $guard = ["id"];
    protected $fillable = ["diagnosa_id", "kode_depresi", "max_depresi", "kondisi"];

    public function depresi()
    {
        return $this->belongsTo(TingkatDepresi::class, 'kode_depresi', 'kode_depresi');
    }
}
