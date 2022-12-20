@extends('main')
@section('main_section')
    {{-- Navbar --}}
    <header>
        @include('components.cl_navbar')
    </header>
    {{-- isi --}}
    <main>
        @yield('cl_content')
    </main>
@endsection
