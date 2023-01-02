@extends('admin.admin_main')
@section('title', 'Dashboard')

{{-- isi --}}
@section('admin_content')
    <!-- Page content-->
    <main id="main" class="main">
        <section class="section dashboard">
            <div class="row">
                <div class="col-lg-12">
                    <table class="table table-hover mt-2 p-2">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Diagnosa ID</th>
                            <th scope="col">Tingkat Depresi</th>
                            <th scope="col">Persentase</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($diagnosa as $item)
                                <?php $int = 0 ?>
                                <?php $data_diagnosa = json_decode($item->data_diagnosa, true) ?>
                                <?php foreach ($data_diagnosa as $val ) {
                                    if (floatval($val["value"]) > $int) {
                                        $diagnosa_dipilih["value"] = floatval($val["value"]);
                                        $diagnosa_dipilih["kode_depresi"] = App\Models\TingkatDepresi::where("kode_depresi", $val["kode_depresi"])->first();
                                        $int = floatval($val["value"]);
                                    }
                                } ?>
                                <tr>
                                    <th scope="row">{{ $loop->iteration }}</th>
                                    <td>{{ $item->diagnosa_id }}</td>
                                    <td> {{ $diagnosa_dipilih["kode_depresi"]->kode_depresi }} | {{ $diagnosa_dipilih["kode_depresi"]->depresi }}</td>
                                    <td>{{ ($diagnosa_dipilih["value"] * 100) }} %</td>
                                    <td><a class="p-2" href="{{ route('spk.result', ["diagnosa_id" => $item->diagnosa_id]) }}">Detail</a></td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </main><!-- End #main -->
@endsection
