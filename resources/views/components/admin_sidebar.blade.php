 <!-- ======= Sidebar ======= -->
 <aside id="sidebar" class="sidebar">

  <ul class="sidebar-nav" id="sidebar-nav">

    <li class="nav-item">
      <a class="nav-link " href="/dashboard">
        <i class="bi bi-grid"></i>
        <span>Dashboard</span>
      </a>
    </li><!-- End Dashboard Nav -->

    <li class="nav-heading">Pengetahuan</li>

    <li class="nav-item">
      <a class="nav-link collapsed" href="{{ route('cl.form') }}">
        <i class="bi bi-clipboard-check"></i>
        <span>Diagnosa</span>
      </a>
    </li><!-- End Gejala Page Nav -->
    <li class="nav-item">
      <a class="nav-link collapsed" href="{{ route('gejala.index') }}">
        <i class="bi bi-activity"></i>
        <span>Gejala</span>
      </a>
    </li><!-- End Gejala Page Nav -->

    <li class="nav-item">
      <a class="nav-link collapsed" href="{{ route('depresi.index') }}">
        <i class="bi bi-patch-question"></i>
        <span>Depresi</span>
      </a>
    </li><!-- End Depresi Page Nav -->

    <li class="nav-item">
      <a class="nav-link collapsed" href="{{ route('spk.index') }}">
        <i class="bi bi-clipboard2-data"></i>
        <span>Hasil Diagnosa</span>
      </a>
    </li><!-- End Depresi Page Nav -->

    <li class="nav-heading">Pengaturan</li>

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-person"></i><span>Admin</span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="/dashboard/add_admin">
            <i class="bi bi-circle"></i><span>Tambah Admin</span>
          </a>
        </li>
        <li>
          <a href="/dashboard/admin">
            <i class="bi bi-circle"></i><span>Daftar Admin</span>
          </a>
        </li>
      </ul>
    </li><!-- End Forms Nav -->




    <li class="nav-item" style="nowrap">

      <a class="nav-link collapsed" href="{{ route('logout') }}"
        onclick="event.preventDefault();
                      document.getElementById('logout-form').submit();">
         <i class="bi bi-box-arrow-right"></i>{{ __('Logout') }}
     </a>
     <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
       @csrf
    </form>
    </li><!-- End F.A.Q Page Nav -->

  </ul>

</aside><!-- End Sidebar-->
