<!-- Modal Edit depresi -->
<div class="modal fade modal-fullscreen-md-down" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Ubah Depresi</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{-- form --}}
          <form id="edit-depresi" action="" method="post">
            @method("put")
            @csrf
            <div class="input-form d-flex">
                <input type="hidden" name="id" id="id_depresi">
                <div class="form-floating mb-3 p-2 mx-2">
                    <input type="text" class="form-control" id="kode-depresi" name="kode_depresi" readonly>
                    <label for="kode-depresi">Kode Depresi</label>
                </div>
                <div class="form-floating mb-3 p-2 mx-2">
                    <input type="text" class="form-control" id="depresi" name="depresi">
                    <label for="depresi">Depresi</label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">ubah</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
</div>
{{-- end modal edit depresi --}}

{{-- modal tambah depresi --}}
<div class="modal fade modal-fullscreen-md-down" id="depresiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Depresi</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{-- form edit --}}
          <form id="tambah-depresi" action="{{ route('depresi.store') }}" method="post">
            @csrf
            <div class="input-form d-flex">
                <input type="hidden" name="id" id="id_depresi">
                <div class="form-floating mb-3 p-2 mx-2">
                    <input type="text" class="form-control" id="kode-depresi" name="kode_depresi" placeholder="kode depresi" required>
                    <label for="kode-depresi">Kode Depresi</label>
                </div>
                <div class="form-floating mb-3 p-2 mx-2">
                    <input type="text" class="form-control" id="depresi" name="depresi" placeholder="depresi" required>
                    <label for="depresi">Depresi</label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">simpan</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
</div>
{{-- end modal tambah depresi --}}

<script>
    function updateInput(iddepresi, kode, depresi){
        document.getElementById("kode-depresi").value = kode;
        document.getElementById("depresi").value = depresi;
        document.getElementById("id_depresi").value = iddepresi;
    }

    function actionUbahdepresi(params) {
        const formdepresi = document.getElementById('edit-depresi');
        formdepresi.setAttribute('action', params);
        formdepresi.setAttribute('method', 'POST');
        console.log(formdepresi);
    }

</script>
