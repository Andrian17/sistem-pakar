<?php

use App\Http\Controllers\DiagnosaController;
use App\Http\Controllers\GejalaController;
use App\Http\Controllers\TingkatDepresiController;
use App\Models\Diagnosa;
use App\Models\TingkatDepresi;
use App\Models\KondisiUser;
use App\Models\Gejala;
use App\Models\User;
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
    return view('landing');
});

Route::get('/dashboard', function () {
    $data = [
        'gejala' => Gejala::all(),
        'kondisi_user' => KondisiUser::all(),
        'user' => User::all(),
        'tingkat_depresi' => TingkatDepresi::all()

    ];
    return view('admin.dashboard', $data);
});

Route::get('/dashboard/admin', function () {
    $data = [
        'user' => User::all()
    ];
    return view('admin.list_admin', $data);
});

Route::get('/dashboard/add_admin' , function () {
    auth()->logout();
    return view('admin.add_admin');
    
});

Route::get('/log', function () {
    return view('login');
});

Route::get('/form-faq', function () {
    $data = [
        'gejala' => Gejala::all(),
        'kondisi_user' => KondisiUser::all()
    ];
    
    return view('faq', $data);
});

Route::get('/form', function () {
    $data = [
        'gejala' => Gejala::all(),
        'kondisi_user' => KondisiUser::all()
    ];
    
    return view('form', $data);
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
