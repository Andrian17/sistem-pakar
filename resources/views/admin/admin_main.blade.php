@extends('main')
{{-- @section('external_assets')
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
@endsection
@section('js_external_assets')
    <script src="{{ asset('assets/js/main.js') }}"></script>
@endsection --}}
@section('main_section')
    {{-- Navbar dan header --}}
    @include('components.admin_header')

    {{-- seidebar --}}
    @include('components.admin_sidebar')

    {{-- isi --}}
    <main>
        @yield('admin_content')
    </main>

@endsection
