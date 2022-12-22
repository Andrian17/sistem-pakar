@extends('admin.admin_main')
@section('title', 'Gejala')

{{-- isi --}}
@section('admin_content')
    <!-- Page content-->
    <div class="container text-center mt-lg-5 p-lg-5">
        <div class="row">
          <div class="col-lg-8 justify-content-center mx-auto">
            @if (session()->has('pesan'))
                {!!  session('pesan') !!}
            @endif
            @if ($errors->any())
                <div class="alert alert-danger mt-3 p-3">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <div class="mt-2 pt-3 d-flex ms-auto">
                <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#storeModal">
                    <i class="bi bi-plus-circle-fill"> Tambah Gejala</i>
                </button>
            </div>
            <table id="tabel-gejala" class="table table-bordered table-hover my-2">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Kode Gejala</th>
                    <th scope="col">Gejala</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                    @foreach ($gejala as $item)
                        <tr>
                            <th scope="row">{{ $loop->iteration + $gejala->firstItem() -1 }}</th>
                            <td>{{$item->kode_gejala}}</td>
                            <td>{{$item->gejala}}</td>
                            <td>
                                <button class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="updateInput('{{ $item->id }}', '{{$item->kode_gejala}}', '{{$item->gejala}}'), actionUbahGejala('/gejala/{{$item->id}}')">
                                    <i class="bi bi-pencil-square"></i>
                                </button>
                                <form action="/gejala/{{ $item->id }}" method="post" class="d-inline">
                                    @method('delete')
                                    @csrf
                                    <button type="submit" class="btn btn-outline-danger">
                                        <i class="bi bi-trash3-fill"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
              </table>
              <div class="d-flex justify-content-center">
                  {{ $gejala->links('pagination::simple-bootstrap-5') }}
              </div>
              @include('components.admin_modal_gejala_edit')
          </div>
        </div>
    </div>

@endsection
