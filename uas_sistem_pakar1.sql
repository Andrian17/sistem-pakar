-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 29 Des 2022 pada 15.17
-- Versi server: 5.7.33
-- Versi PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uas_sistem_pakar`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `artikels`
--

CREATE TABLE `artikels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url_gambar` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kode_depresi` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `artikels`
--

INSERT INTO `artikels` (`id`, `url_gambar`, `kode_depresi`, `judul`, `isi`, `created_at`, `updated_at`) VALUES
(1, 'https://via.placeholder.com/640x480.png/0011ff?text=emotion+qui', 'P002', 'Inventore eum aperiam eligendi voluptate ipsa.', 'Ut eveniet quaerat aut. Voluptas et sint sit voluptas et nesciunt vel. Cum ipsam et iure quo sit perspiciatis labore. Architecto ut est qui quis dolores. Corporis nesciunt magni distinctio nihil ducimus tempora. Laborum et quaerat sequi quia consequatur nam illo. Deleniti sit itaque ut fuga accusamus quia. Laborum in est voluptas pariatur temporibus. Cum ut dolor possimus minima hic dolores. Ut et aut nihil recusandae dolores. Sit nihil modi doloremque ad consequuntur. Nulla autem totam est suscipit.', '2022-12-28 03:27:28', '2022-12-28 03:27:28'),
(2, 'https://via.placeholder.com/640x480.png/00dd33?text=emotion+dolorem', 'P002', 'Amet animi vitae dolorum aut.', 'Nulla dolores et rerum vel qui. Vel quo vel ipsum perspiciatis. Reiciendis tempora reprehenderit eius voluptas. Aut nam necessitatibus consequatur earum earum natus. Dolorem nulla ea tenetur et et. Enim vitae aut enim mollitia temporibus voluptas. Harum modi provident similique asperiores et voluptate. Nisi laborum dolorem laboriosam distinctio fugit. Quisquam voluptas veniam repellendus molestiae ex. Voluptates consequatur qui explicabo non. Voluptas est magnam quod officiis placeat sit. Eum dicta aperiam nihil. Quidem rerum aut tenetur animi voluptas.', '2022-12-28 03:27:28', '2022-12-28 03:27:28'),
(3, 'https://via.placeholder.com/640x480.png/00aadd?text=emotion+quia', 'P002', 'Nesciunt dolorem ut sapiente praesentium eaque omnis.', 'Beatae illo dolores quo. Eaque sapiente aliquid ab facere ut. Et sunt necessitatibus sed ex. Magnam ea fugit vero optio. Nisi perferendis illo quisquam mollitia dignissimos. Impedit et at ipsum. Eligendi et non ipsa qui debitis placeat totam. Veritatis qui ratione quia itaque optio nemo ut similique. Numquam quasi totam officiis unde est sunt quo. In ratione rerum doloribus temporibus. Et molestias rerum saepe repellat dolores corrupti illum. Magnam quos molestiae et. Modi dolores atque sit.', '2022-12-28 03:27:28', '2022-12-28 03:27:28'),
(4, 'https://via.placeholder.com/640x480.png/00bbaa?text=emotion+qui', 'P002', 'Facilis iste soluta maxime qui sequi voluptatem quae.', 'Tenetur est a ut eos repellendus aut vitae. Odio odio est nobis esse quia. Fugit soluta atque iure aut. Est possimus ut recusandae. Non ducimus et ipsam dolor ipsam vel sunt amet. Occaecati doloribus molestiae dolorem earum corrupti sint. Alias et vel molestiae minus magni. Repudiandae corrupti repellendus aut harum. Qui alias velit quos voluptatem voluptate eum sint non. Amet nihil ut rerum nemo voluptas. Sit unde minus distinctio. Quam voluptatem consequatur animi.', '2022-12-28 03:27:28', '2022-12-28 03:27:28'),
(5, 'https://unsplash.com/photos/w818vRg6pdY', 'P001', 'Gangguan Mood', 'Ganggguan mood yang terjadi pada seseorang ini umumnya terjadi karena banyaknya tekanan yang menimpa dirinya dan cenderung terlarut dalam tekanan dapat meningkatkan resiko berkembangnya gangguan mood yang kemudian dapat berubah menjadi depresi terutama depresi mayor. Hal ini terbukti pada suatu penelitian yang menemukan bahwa dalam sekitar empat dari lima kasus, depresi mayor diawali oleh peristiwa kehidupan yang penuh tekanan.', NULL, NULL),
(6, 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/10/04084507/Ini-Ciri-Ciri-Depresi-Ringan-yang-Masih-Sering-Diabaikan.jpg', 'P002', 'Depresi Minor / Depresi Ringan', 'Depresi ringan ini di identikkan dengan depresi minor yang merupakan perasaan melankolis yang berlangsung sebentar dan disebabkan oleh sebuah kejadian yang tragis atau mengandung ancaman, atau kehilangan sesuatu yang penting dalam kehidupan si penderita (Meier, 2000: 20-21). Orang dengan depresi ringan ini setidaknya memiliki 2 dari gejala lainnya dan 2-3 dari gejala utama. (Maslim, 2003, 64).', NULL, NULL),
(7, 'https://soc-phoenix.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2017/09/22173906/mental-illness-and-disorders.jpg', 'P003', 'Depresi Sedang', 'Depresi sedang ini di alami oleh penderita selama kurang 2 minggu, dan orang dengan depresi sedang ini mengalami kesulitan nyata untuk meneruskan kegiatan social, pekerjaan dan urusan rumah tangga. Orang dengan depresi sedang ini setidaknya memiliki 2-3 dari gejala utama dan 3-4 dari gejala lainnya (Maslim,  2003: 64).', NULL, NULL),
(8, 'https://soc-phoenix.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2017/09/22173906/mental-illness-and-disorders.jpg', 'P004', 'Depresi mayor / Depresi Berat', 'Depresi mayor merupakan salah satu gangguan yang prevalensinya paling tinggi di antara berbagai gangguan (Davidson, 2006: 374). Depresi mayor adalah kemurungan yang dalam dan menyebar luas. Perasaan murung ini mampu menyedot semangat dan energy serta menyelubungi kehidupan si penderita seperti asap yang tebak dan menyesakkan dada. Depresi mayor ini dapat berlangsung cukup lama mulai dari empat belas hari sampai beberapa tahun. Hal ini menyebabkan penderita akan sangat sulit utnuk berfungsi dengan baik di lingkungannya. Orang dengan depresi mayor ini juga terkadang disertai dengan keinginan untuk bunuh diri atau bahkan keinginan untuk mati. Orang yang sangat tertekan, mereka akan mengalami dampak hal-hal yang mengganggu kejiwaan mereka seperti gila, paranoia atau halusinasi pendengaran (Meier, 2000: 25-26).', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `diagnosas`
--

CREATE TABLE `diagnosas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `diagnosa_id` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_diagnosa` json NOT NULL,
  `kondisi` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `diagnosas`
--

INSERT INTO `diagnosas` (`id`, `diagnosa_id`, `data_diagnosa`, `kondisi`, `created_at`, `updated_at`) VALUES
(1, '63abc5cb869eb', '[{\"value\": \"0.52\", \"kode_depresi\": \"P001\"}, {\"value\": \"0.8704\", \"kode_depresi\": \"P002\"}, {\"value\": \"1\", \"kode_depresi\": \"P003\"}, {\"value\": \"0.99616\", \"kode_depresi\": \"P004\"}]', '[[\"G001\", \"0.6\"], [\"G002\", \"0.4\"], [\"G010\", \"0.6\"], [\"G013\", \"0.4\"], [\"G015\", \"0.8\"], [\"G017\", \"0\"], [\"G020\", \"1\"], [\"G024\", \"0\"], [\"G026\", \"0.4\"]]', '2022-12-28 03:27:55', '2022-12-28 03:27:55');

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `gejala`
--

CREATE TABLE `gejala` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kode_gejala` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gejala` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `gejala`
--

INSERT INTO `gejala` (`id`, `kode_gejala`, `gejala`, `created_at`, `updated_at`) VALUES
(1, 'G001', 'Sering Merasa Sedih', NULL, NULL),
(2, 'G002', 'Sering kelelahan melakukan aktifitas ringan', NULL, NULL),
(3, 'G003', 'Kurang konsentrasi dalam belajar ', NULL, NULL),
(4, 'G004', 'Mudah merasa bosan', NULL, NULL),
(5, 'G005', 'Sering Melamun', NULL, NULL),
(6, 'G006', 'Tidak semangat melakukan sesuatu', NULL, NULL),
(7, 'G007', 'Merasa Risau', NULL, NULL),
(8, 'G008', 'Pesimis', NULL, NULL),
(9, 'G009', 'Sering menangis secara tiba-tiba', NULL, NULL),
(10, 'G010', 'Gangguan susah Tidur', NULL, NULL),
(11, 'G011', 'Merasa Cemas Berlebihan', NULL, NULL),
(12, 'G012', 'Kecewa dengan diri sendiri', NULL, NULL),
(13, 'G013', 'Terganggu dengan banyak hal', NULL, NULL),
(14, 'G014', 'Sering murung', NULL, NULL),
(15, 'G015', 'Kehilangan minat terhadap hoby', NULL, NULL),
(16, 'G016', 'Merasa kesepian', NULL, NULL),
(17, 'G017', 'Sering merasa bersalah', NULL, NULL),
(18, 'G018', 'Merasa dihakimi', NULL, NULL),
(19, 'G019', 'Membenci Diri Sendiri', NULL, NULL),
(20, 'G020', 'Mudah tersinggung', NULL, NULL),
(21, 'G021', 'Kehilangan Nafsu makan ', NULL, NULL),
(22, 'G022', 'Khawatir tentang penampilan', NULL, NULL),
(23, 'G023', 'Mudah Marah', NULL, NULL),
(24, 'G024', 'Suka menyendiri', NULL, NULL),
(25, 'G025', 'Pikiran Untuk Bunuh Diri', NULL, NULL),
(26, 'G026', 'Sulit mengambil keputusan', NULL, NULL),
(27, 'G027', 'Sulit melakukan kegiatan dengan Baik', NULL, NULL),
(28, 'G028', 'Ada penambahan dan penurunan berat badan', NULL, NULL),
(29, 'G029', 'Kurang percaya diri', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `keputusan`
--

CREATE TABLE `keputusan` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kode_gejala` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kode_depresi` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mb` double(8,2) NOT NULL,
  `md` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `keputusan`
--

INSERT INTO `keputusan` (`id`, `kode_gejala`, `kode_depresi`, `mb`, `md`, `created_at`, `updated_at`) VALUES
(1, 'G001', 'P001', 0.60, 0.20, NULL, NULL),
(2, 'G002', 'P001', 0.40, 0.20, NULL, NULL),
(3, 'G003', 'P001', 1.00, 0.00, NULL, NULL),
(4, 'G004', 'P001', 0.40, 0.20, NULL, NULL),
(5, 'G005', 'P001', 0.80, 0.20, NULL, NULL),
(6, 'G007', 'P001', 0.40, 0.20, NULL, NULL),
(7, 'G001', 'P002', 0.60, 0.20, NULL, NULL),
(8, 'G002', 'P002', 0.60, 0.20, NULL, NULL),
(9, 'G006', 'P002', 1.00, 0.00, NULL, NULL),
(10, 'G008', 'P002', 0.60, 0.20, NULL, NULL),
(11, 'G010', 'P002', 0.60, 0.20, NULL, NULL),
(12, 'G011', 'P002', 0.60, 0.20, NULL, NULL),
(13, 'G014', 'P002', 0.80, 0.00, NULL, NULL),
(14, 'G015', 'P002', 0.60, 0.20, NULL, NULL),
(15, 'G016', 'P002', 0.80, 0.00, NULL, NULL),
(16, 'G022', 'P002', 0.60, 0.00, NULL, NULL),
(17, 'G001', 'P003', 0.80, 0.20, NULL, NULL),
(18, 'G009', 'P003', 0.80, 0.20, NULL, NULL),
(19, 'G010', 'P003', 0.80, 0.20, NULL, NULL),
(20, 'G011', 'P003', 0.60, 0.20, NULL, NULL),
(21, 'G012', 'P003', 0.80, 0.20, NULL, NULL),
(22, 'G013', 'P003', 1.00, 0.00, NULL, NULL),
(23, 'G016', 'P003', 1.00, 0.00, NULL, NULL),
(24, 'G017', 'P003', 0.80, 0.20, NULL, NULL),
(25, 'G020', 'P003', 0.60, 0.20, NULL, NULL),
(26, 'G022', 'P003', 1.00, 0.00, NULL, NULL),
(27, 'G023', 'P003', 0.80, 0.20, NULL, NULL),
(28, 'G027', 'P003', 0.60, 0.20, NULL, NULL),
(29, 'G001', 'P004', 0.80, 0.00, NULL, NULL),
(30, 'G009', 'P004', 1.00, 0.00, NULL, NULL),
(31, 'G010', 'P004', 0.80, 0.00, NULL, NULL),
(32, 'G012', 'P004', 1.00, 0.00, NULL, NULL),
(33, 'G013', 'P004', 0.20, 0.20, NULL, NULL),
(34, 'G016', 'P004', 1.00, 0.00, NULL, NULL),
(35, 'G018', 'P004', 0.60, 0.20, NULL, NULL),
(36, 'G019', 'P004', 0.80, 0.20, NULL, NULL),
(37, 'G020', 'P004', 0.80, 0.00, NULL, NULL),
(38, 'G021', 'P004', 0.40, 0.20, NULL, NULL),
(39, 'G024', 'P004', 0.60, 0.20, NULL, NULL),
(40, 'G025', 'P004', 0.80, 0.20, NULL, NULL),
(41, 'G026', 'P004', 0.40, 0.20, NULL, NULL),
(42, 'G027', 'P004', 0.60, 0.00, NULL, NULL),
(43, 'G028', 'P004', 1.00, 0.00, NULL, NULL),
(44, 'G029', 'P004', 0.80, 0.00, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `kondisi_users`
--

CREATE TABLE `kondisi_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kondisi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nilai` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kondisi_users`
--

INSERT INTO `kondisi_users` (`id`, `kondisi`, `nilai`, `created_at`, `updated_at`) VALUES
(1, 'Tidak Tahu', 0.00, NULL, NULL),
(2, 'Tidak Yakin', 0.20, NULL, NULL),
(3, 'Mungkin', 0.40, NULL, NULL),
(4, 'Kemungkinan Besar', 0.60, NULL, NULL),
(5, 'Hampir Pasti', 0.80, NULL, NULL),
(6, 'Pasti', 1.00, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_12_19_072517_create_gejalas_table', 1),
(6, '2022_12_20_020104_create_keputusans_table', 1),
(7, '2022_12_20_023708_create_kondisi_users_table', 1),
(8, '2022_12_21_202642_create_diagnosas_table', 1),
(9, '2022_12_22_143013_create_tingkat_depresis_table', 1),
(10, '2022_12_28_103705_create_artikels_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tingkat_depresi`
--

CREATE TABLE `tingkat_depresi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kode_depresi` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `depresi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `tingkat_depresi`
--

INSERT INTO `tingkat_depresi` (`id`, `kode_depresi`, `depresi`, `created_at`, `updated_at`) VALUES
(1, 'P001', 'Gangguan Mood', NULL, NULL),
(2, 'P002', 'Depresi Ringan', NULL, NULL),
(3, 'P003', 'Depresi Sedang', NULL, NULL),
(4, 'P004', 'Depresi Berat', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `artikels`
--
ALTER TABLE `artikels`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `diagnosas`
--
ALTER TABLE `diagnosas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `gejala`
--
ALTER TABLE `gejala`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `keputusan`
--
ALTER TABLE `keputusan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kondisi_users`
--
ALTER TABLE `kondisi_users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `tingkat_depresi`
--
ALTER TABLE `tingkat_depresi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `artikels`
--
ALTER TABLE `artikels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `diagnosas`
--
ALTER TABLE `diagnosas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `gejala`
--
ALTER TABLE `gejala`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT untuk tabel `keputusan`
--
ALTER TABLE `keputusan`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT untuk tabel `kondisi_users`
--
ALTER TABLE `kondisi_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tingkat_depresi`
--
ALTER TABLE `tingkat_depresi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
