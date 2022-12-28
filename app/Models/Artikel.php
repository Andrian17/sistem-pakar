<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;
    protected $fillable = ["isi", "judul", "kode_depresi", "id_gambar"];

    public function depresi()
    {
        return $this->belongsTo(TingkatDepresi::class, 'kode_depresi', 'kode_depresi');
    }
}
