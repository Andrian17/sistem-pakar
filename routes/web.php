<?php

use App\Http\Controllers\DiagnosaController;
use App\Http\Controllers\GejalaController;
use App\Http\Controllers\TingkatDepresiController;
use App\Models\Diagnosa;
use App\Models\TingkatDepresi;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('/spk', DiagnosaController::class);
Route::get('/spk/result/{diagnosa_id}', [DiagnosaController::class, 'diagnosaResult'])->name('spk.result');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::resource('/gejala', GejalaController::class);
Route::resource('/depresi', TingkatDepresiController::class);

// Route::get('/spk/{max}/{kode_depresi}', ['as' => 'spk.show', 'use' => 'DiagnosaController@show'])->name('spk.diagnosa_depresi');
Route::get('/spk/diagnosa/{max}/{depresi}', [DiagnosaController::class, 'renderResult'])->name('spk.render');
// Route::get('student-detail/{id}/{parameter}', [StudentController::class, 'detail'])->name('student.detail');
