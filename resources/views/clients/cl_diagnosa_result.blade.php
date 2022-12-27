@extends('clients.cl_main')
@section('title', 'Form Diagnosa')

@section('cl_content')
    <div class="contaner">
       <div class="row mx-auto">
        <div class="col-lg-10 mx-auto">
            <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Diagnosa ID</th>
                    <th scope="col">Tingkat Depresi</th>
                    <th scope="col">Persentase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{{ $diagnosa->diagnosa_id }}</td>
                    <td> {{ $diagnosa_dipilih["kode_depresi"]->kode_depresi }} | {{ $diagnosa_dipilih["kode_depresi"]->depresi }}</td>
                    <td>{{ ($diagnosa_dipilih["value"] * 100) }} %</td>
                  </tr>
                </tbody>
            </table>
        </div>

        {{-- section 2 --}}
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <div class="d-flex ">
                    <table class="table table-hover mt-lg-5">
                        <thead>
                            <tr>
                                <th scope="col">User</th>
                            </tr>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Gejala</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($gejala as $key => $val)
                            <tr>
                                @foreach ($val as $item)
                                    <td>#</td>
                                    <td>{!! array_search($item, $val) !!} | {{ ($item) }}</td>
                                @endforeach
                            </tr>
                            @endforeach
                        </tbody>
                    </table>

                    {{-- Pakar --}}
                    <table class="table table-hover mt-lg-5">
                        <thead>
                            <tr>
                                <th scope="col">Pakar</th>
                            </tr>
                            <tr>
                            <th scope="col">Gejala</th>
                            <th scope="col">Nilai (MB - MD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($pakar as $item)
                                <tr>
                                    <td>
                                        {{ $item->kode_gejala }} | {{ $item->kode_depresi }}
                                    </td>
                                    <td>{{ $item->mb - $item->md }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
       </div>
    </div>
@endsection

