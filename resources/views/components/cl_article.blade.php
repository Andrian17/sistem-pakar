<div class="row">
    <div class="col-lg-10 mx-auto">
        <div class="my-4 article border border-warning p-4">
            <h2 class="mx-auto my-2">{{ $artikel->judul }}</h2>
            <img src="{{ $artikel->url_gambar }}" alt="depresi-img" width="480" height="360" class="p-3 border border-primary">
            <p class="my-2 py-2">{{ $artikel->isi }}</p>
        </div>
    </div>
</div>
