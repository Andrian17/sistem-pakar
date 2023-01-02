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
                <p>Apakah anda merasa {{ $item->gejala }} ?</p>
            </div>
        </td>
        <td>
            <div class="pilihan">
                @foreach ($kondisi_user as $kondisi)
                    <div class="form-check-inline">
                        <input class="form-check-input" type="radio" name="kondisi[{{ $item->kode_gejala }}]" id="kondisi_{{ $kondisi->nilai }}" value="{{ $kondisi->nilai }}">
                        <label class="form-check-label" for="kondisi_{{ $kondisi->nilai }}" style="display: block; font-size: smaller;">{{ $kondisi->kondisi }}</label>
                    </div>
                @endforeach
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
