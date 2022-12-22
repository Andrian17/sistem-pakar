<?php

namespace App\Http\Controllers;

use App\Models\Gejala;
use App\Http\Requests\StoreGejalaRequest;
use App\Http\Requests\UpdateGejalaRequest;

class GejalaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gejala = Gejala::paginate(15);
        return view('admin.gejala.gejala', compact('gejala'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreGejalaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGejalaRequest $request)
    {
        // dd($request->all());
        $valid = $request->validate([
            "kode_gejala" => 'required|unique:gejala,kode_gejala',
            'gejala' => 'required|unique:gejala,gejala'
        ]);
        Gejala::create($valid);
        return redirect()->route('gejala.index')->with('pesan', '<div class="alert alert-success p-3 mt-3" role="alert">
        Gejala telah ditambahkan
        </div>');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gejala  $gejala
     * @return \Illuminate\Http\Response
     */
    public function show(Gejala $gejala)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gejala  $gejala
     * @return \Illuminate\Http\Response
     */
    public function edit(Gejala $gejala)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateGejalaRequest  $request
     * @param  \App\Models\Gejala  $gejala
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGejalaRequest $request, Gejala $gejala)
    {
        $valid = $request->validate([
            "gejala" => "required"
        ]);
        $gejala->update($valid);
        return redirect()->route('gejala.index')->with('pesan', '<div class="alert alert-info p-3 mt-3" role="alert">
        Gejala telah diperbarui
        </div>');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gejala  $gejala
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gejala $gejala)
    {
        // dd($gejala);
        $gejala->delete();
        return redirect()->route('gejala.index')->with('pesan', '<div class="alert alert-danger p-3 mt-3" role="alert">
        Gejala telah dihapus
        </div>');
    }
}
