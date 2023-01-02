@extends('main')
@section('main_section')
    {{-- Navbar --}}
    <header>
        <img src="{{ asset('depresi-assets/opera.png') }}" alt="image description" style="max-width: 100%;
height: auto;
object-fit: cover;">
        {{-- @include('components.cl_navbar') --}}
    </header>
    {{-- isi --}}
    <main>
        @yield('cl_content')
    </main>
@endsection
