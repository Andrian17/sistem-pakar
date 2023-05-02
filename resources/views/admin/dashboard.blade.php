@extends('admin.admin_main')
@section('title', 'Dashboard')

{{-- isi --}}
@section('admin_content')
    <!-- Page content-->
    <main id="main" class="main">

        <div class="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div><!-- End Page Title -->

        <section class="section dashboard">
          <div class="row">

            <!-- Left side columns -->
            <div class="col-lg-12">
              <div class="row">

                <!-- Sales Card -->
                <div class="col-xxl-4 col-md-6">
                  <div class="card info-card sales-card">

                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">Daftar <span>| Gejala</span></h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-activity"></i>
                        </div>
                        <div class="ps-3">
                          <h6>{{$gejala->count()}}</h6>
                          <span class="text-success small pt-1 fw-bold">{{$gejala->count()}}</span> <span class="text-muted small pt-2 ps-1">gejala</span>

                        </div>
                      </div>
                    </div>

                  </div>
                </div><!-- End Sales Card -->

                <!-- Revenue Card -->
                <div class="col-xxl-4 col-md-6">
                  <div class="card info-card revenue-card">

                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">Gangguan <span>| Depresi</span></h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-x"></i>
                        </div>
                        <div class="ps-3">
                          <h6>{{$tingkat_depresi->count()}}</h6>
                          <span class="text-success small pt-1 fw-bold">{{$gejala->count()}}</span> <span class="text-muted small pt-2 ps-1">gejala</span>

                        </div>
                      </div>
                    </div>

                  </div>
                </div><!-- End Revenue Card -->

                <!-- Customers Card -->
                <div class="col-xxl-4 col-xl-12">

                  <div class="card info-card customers-card">

                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">Jumlah <span>| Admin</span></h5>

                      <div class="d-flex align-items-center">
                        <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i class="bi bi-people"></i>
                        </div>
                        <div class="ps-3">
                          <h6>{{$user->count()}}</h6>
                          <span class="text-danger small pt-1 fw-bold">{{$user->count()}}</span> <span class="text-muted small pt-2 ps-1">admin</span>

                        </div>
                      </div>

                    </div>
                  </div>

                </div><!-- End Customers Card -->



                <!-- Recent Sales -->
                <div class="col-12">
                  <div class="card recent-sales overflow-auto">

                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                      </ul>
                    </div>

                    <div class="card-body">
                      <h5 class="card-title">Daftar <span>| Gejala</span></h5>

                      <table class="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Kode Gejala</th>
                            <th scope="col">Gejala</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($gejala as $item)
                          <tr>
                            <th scope="row"><a href="#">#{{ $loop->iteration }}</a></th>
                            <td><a href="#" class="text-primary">{{ $item->kode_gejala }}</a></td>
                            <td>{{ $item->gejala }}</td>
                          </tr>
                          @endforeach
                        </tbody>
                      </table>

                    </div>

                  </div>
                </div><!-- End Recent Sales -->

                <!-- Top Selling -->
                <div class="col-12">
                  <div class="card top-selling overflow-auto">

                    <div class="filter">
                      <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li class="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li><a class="dropdown-item" href="#">Today</a></li>
                        <li><a class="dropdown-item" href="#">This Month</a></li>
                        <li><a class="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>

                    <div class="card-body pb-0">
                      <h5 class="card-title">Gangguan <span>| Depresi</span></h5>

                      <table class="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Kode depresi</th>
                            <th scope="col">Tinkat depresi</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($tingkat_depresi as $item)
                          <tr>
                            <th scope="row"><a href="#">#{{ $loop->iteration }}</a></th>
                            <td><a href="#" class="text-primary">{{ $item->kode_depresi }}</a></td>
                            <td>{{ $item->depresi }}</td>
                          </tr>
                          @endforeach

                        </tbody>
                      </table>

                    </div>

                  </div>
                </div><!-- End Top Selling -->

              </div>
            </div><!-- End Left side columns -->



          </div>
        </section>

      </main><!-- End #main -->


@endsection
