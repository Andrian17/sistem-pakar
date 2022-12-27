@extends('clients.cl_main')
@section('title', 'Form Diagnosa')

{{-- isi --}}
@section('cl_content')
    <!-- Page content-->
    <div class="container text-center">
        <div class="row">
          <div class="col-lg-10">
            <form action="{{ route('spk.store') }}" method="post">
                @csrf()
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Pertanyaan</th>
                        <th scope="col">Pilihan</th>
                      </tr>
                    </thead>
                    <tbody>
                        @foreach ($gejala as $item)
                        <tr>
                            <th scope="row">{{ $loop->iteration }}</th>
                            <td>
                                <div class="pertanyaan">
                                    <p>Apakah and merasa {{ $item->gejala }} ?</p>
                                </div>
                            </td>
                            <td>
                                <div class="pilihan">
                                    <select class="form-select" aria-label="Default select example" name="kondisi[{{ $item->kode_gejala }}]">
                                        <option value="#">Pilih</option>
                                        @foreach ($kondisi_user as $kondisi)
                                            <option value='{{ $kondisi->nilai }}'>{{ $kondisi->kondisi }}</option>
                                        @endforeach
                                        </select>
                                </div>
                            </td>
                          </tr>
                        @endforeach

                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </form>
          </div>
          {{-- <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div> --}}
        </div>
    </div>

@endsection
