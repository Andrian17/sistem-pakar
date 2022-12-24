<?php

namespace App\Http\Controllers;

use App\Models\Diagnosa;
use App\Http\Requests\StoreDiagnosaRequest;
use App\Http\Requests\UpdateDiagnosaRequest;
use App\Models\Gejala;
use App\Models\Keputusan;
use App\Models\KondisiUser;
use App\Models\TingkatDepresi;
use Illuminate\Support\Arr;

class DiagnosaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [
            'gejala' => Gejala::all(),
            'kondisi_user' => KondisiUser::all()
        ];

        return view('clients.form_diagnosa', $data);
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
     * @param  \App\Http\Requests\StoreDiagnosaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDiagnosaRequest $request)
    {
        // dd($request->post('kondisi'));
        $kondisi = $request->post('kondisi');
        $kodeGejala = [];
        foreach ($kondisi as $key => $item) {
            echo "key : " . $key . " item : " . $item;
            echo "<br>";
            if ($item != "-") {
                array_push($kodeGejala, $key);
            }
        }
        // dd($kodeGejala);
        $keputusan = new Keputusan();
        $rule = Keputusan::whereIn('kode_gejala', $kodeGejala)->get();
        $depresi = TingkatDepresi::all();

        $cfTotalTemp = 0;
        $cf = 0;
        $cfLama = 0;
        $cfArr = [];
        // var_dump($kodeGejala);
        // penyakit
        $arrGejala = [];
        foreach ($depresi as $key) {
            $cfArr = [];
            $res = 0;
            // dd($key->kode_depresi);
            // $ruleSetiapDepresi = Keputusan::whereIn('kode_gejala', $kodeGejala)->where('kode_depresi', 'P001')->orderBy('kode_gejala', 'ASC')->get();
            $ruleSetiapDepresi = Keputusan::whereIn('kode_gejala', $kodeGejala)->where('kode_depresi', 'P003')->orderBy('kode_gejala', 'ASC')->get();
            // dd($ruleSetiapDepresi);
            foreach ($ruleSetiapDepresi as $ruleKey) {
                // dd($ruleKey);
                // setiap penyakit
                $cf = $ruleKey->mb - $ruleKey->md;
                array_push($cfArr, $cf);
            }
            $res = $this->getGabunganCf($cfArr);
            // if ($key->kode_depresi == "P002") {
            dd($cfArr);
            //     dd($res);
            // }
            // print_r($cfArr);
            // echo "<br>";
            dd($res);
            array_push($arrGejala, $res);
        }
    }

    public function getGabunganCf($cfArr)
    {
        echo "<br>----------- <br>";
        if (count($cfArr) == 1) {
            return $cfArr;
        }
        print_r($cfArr);
        $cfoldGabungan = $cfArr[0];
        // $cfoldGabungan = 0;
        // print_r(count($cfArr));
        echo "<br> awal : " . $cfoldGabungan . "<br>";

        for ($i = 0; $i < count($cfArr) - 1; $i++) {
            $cfoldGabungan = $cfoldGabungan + $cfArr[$i + 1] * (1 - $cfArr[$i]);
            echo "<br> index : " . $i . "<br>";
            echo $cfoldGabungan;
            echo "<br>";
        }
        echo "return : " . $cfoldGabungan;
        return $cfoldGabungan;
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Diagnosa  $diagnosa
     * @return \Illuminate\Http\Response
     */
    public function show(Diagnosa $diagnosa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Diagnosa  $diagnosa
     * @return \Illuminate\Http\Response
     */
    public function edit(Diagnosa $diagnosa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDiagnosaRequest  $request
     * @param  \App\Models\Diagnosa  $diagnosa
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDiagnosaRequest $request, Diagnosa $diagnosa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Diagnosa  $diagnosa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Diagnosa $diagnosa)
    {
        //
    }
}
