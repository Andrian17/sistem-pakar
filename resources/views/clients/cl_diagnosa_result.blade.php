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
                    <td> {{ $diagnosa->kode_depresi }} | {{ $diagnosa->depresi->depresi }}</td>
                    <td>{{ ($diagnosa->max_depresi * 100) }} %</td>
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
                                <th scope="col">Pakar</th>
                            </tr>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Kode Gejala</th>
                            <th scope="col">Nilai</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($pakar as $key)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $key->kode_gejala }}</td>
                                    <td>{{ ($key->mb - $key->md) }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                      </table>

                      {{-- User --}}
                      <table class="table table-hover mt-lg-5">
                        <thead>
                            <tr>
                                <th scope="col">User</th>
                            </tr>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Kode Gejala</th>
                            <th scope="col">Nilai</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($kondisi as $key => $val)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $key }}</td>
                                    <td>{{ $val }}</td>
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

