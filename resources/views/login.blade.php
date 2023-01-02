<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  <style>
    body {
      background-image: url('landing/img/full-1.jpg');
      background-size: cover;
      background-position: center;
      font-family: 'Lato', sans-serif;
    }
    .login-card {
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      padding: 30px;
      max-width: 400px;
      margin: 100px auto;
      animation: fadeInDown 1s;
    }
    .login-card h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    .form-control {
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.1);
      border: none
    }.form-control:focus {
box-shadow: none;
border-color: #ddd;
}
.form-group {
margin-bottom: 20px;
}
.form-check {
margin-bottom: 20px;
}
.btn {
border-radius: 20px;
background-color: #3498db;
color: white;
font-size: 18px;
padding: 12px 30px;
border: none;
}
.btn:hover {
background-color: #2980b9;
}
</style>

</head>
<body>
  @php
    use Illuminate\Support\Facades\Session;
@endphp

  <div class="login-card animate__animated animate__fadeInDown">
    <div style="text-align: center;">
      <img src="landing/img/logo-dark.png" alt="Logo">
    </div>
    <br>
    <br>
    <h1 style="font-size: 1.5rem;
    font-weight: bold;
    text-align: center;">Admin Login</h1>
    <form method="POST" action="{{ route('login') }}">
      @csrf

      <div class="form-group">
          <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email') }}</label>

          <div class="form-group">
              <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Masukkan email">

              @error('email')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
          </div>
      </div>
      

      <div class="form-group">
          <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

          <div class="form-group" style="white-space: nowrap">
              <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Password">

              @error('password')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
          </div>
      </div>

      
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                  <label class="form-check-label" for="remember">
                      {{ __('Remember Me') }}
                  </label>
              </div>
          

      <button type="submit" class="btn btn-primary btn-block">Log In</button>
  </form>
  </div>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="
