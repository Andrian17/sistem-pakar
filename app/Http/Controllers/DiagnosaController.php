<?php

namespace App\Http\Controllers;

use App\Models\Diagnosa;
use App\Http\Requests\StoreDiagnosaRequest;
use App\Http\Requests\UpdateDiagnosaRequest;
use App\Models\Gejala;
use App\Models\Keputusan;
use App\Models\KondisiUser;
use App\Models\TingkatDepresi;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

use function PHPSTORM_META\map;
use function PHPSTORM_META\type;

class DiagnosaController extends Controller
{
    protected $max;
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

        $mapKondisi = array_filter($kondisi, function ($el) {
            if ($el != "-") {
                return $el;
            }
        });
        $depresi = TingkatDepresi::all();

        $cf = 0;
        $cfArr = [];
        // var_dump($kodeGejala);
        // penyakit
        $arrGejala = [];
        foreach ($depresi as $key) {
            $cfArr = [];
            $res = 0;
            // dd($key->kode_depresi);
            // $ruleSetiapDepresi = Keputusan::whereIn('kode_gejala', $kodeGejala)->where('kode_depresi', 'P001')->orderBy('kode_gejala', 'ASC')->get();
            $ruleSetiapDepresi = Keputusan::whereIn('kode_gejala', $kodeGejala)->where('kode_depresi', $key->kode_depresi)->orderBy('kode_gejala', 'ASC')->get();
            // dd($ruleSetiapDepresi);
            foreach ($ruleSetiapDepresi as $ruleKey) {
                // dd($ruleKey);
                // setiap penyakit
                $cf = $ruleKey->mb - $ruleKey->md;
                array_push($cfArr, $cf);
            }
            $res = $this->getGabunganCf($cfArr);
            // dd($res);
            array_push($arrGejala, $res);
        }
        $maxGejala = max($arrGejala);
        $indexDepresi = array_search($maxGejala, $arrGejala);
        // dd($indexDepresi);

        $tingkatDepresi = TingkatDepresi::all();

        $diagnosa_id = uniqid();
        // dd($diagnosa_id);
        Diagnosa::create([
            'diagnosa_id' => strval($diagnosa_id),
            'kode_depresi' => $tingkatDepresi[$indexDepresi]->kode_depresi,
            'max_depresi' => $maxGejala,
            'kondisi' => json_encode($mapKondisi)
        ]);
        // return redirect()->route('spk.render', ["max" => $maxGejala, "depresi" => $indexDepresi]);
        return redirect()->route('spk.result', ["diagnosa_id" => $diagnosa_id]);
    }

    public function diagnosaResult($diagnosa_id)
    {
        // dd($diagnosa_id);
        $diagnosa = Diagnosa::where('diagnosa_id', $diagnosa_id)->first();
        $kondisi = json_decode($diagnosa->kondisi, true);
        $keyGejala = array_keys($kondisi);
        $pakar = Keputusan::whereIn('kode_gejala', $keyGejala)->where('kode_depresi', $diagnosa->kode_depresi)->get();
        // dd(array_keys($kondisi));
        // dd($pakar);
        return view('clients.cl_diagnosa_result', [
            "diagnosa" => $diagnosa,
            "kondisi" => $kondisi,
            "pakar" => $pakar
        ]);
    }


    public function getGabunganCf($cfArr)
    {
        if (count($cfArr) == 1) {
            return $cfArr[0];
        }
        print_r($cfArr);
        $cfoldGabungan = $cfArr[0];

        for ($i = 0; $i < count($cfArr) - 1; $i++) {
            $cfoldGabungan = $cfoldGabungan + $cfArr[$i + 1] * (1 - $cfoldGabungan);
        }
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
