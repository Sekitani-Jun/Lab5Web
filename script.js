// script.js
//menampilkan pesan "Hello World"
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

//alert dan prompt
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}

//function dan operasi aritmatika
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}
operasiDasar(9, 10);

//Seleksi kondisi if else
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}

//Seleksi kondisi switch case
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
  case "1":
    alert("Bilangan satu");
    break;
  case "2":
    alert("Bilangan dua");
    break;
  case "3":
    alert("Bilangan tiga");
    break;
  case "4":
    alert("Bilangan empat");
    break;
  case "5":
    alert("Bilangan lima");
    break;
  default:
    alert("Pilihan tidak tersedia");
}

//Form bilangan genap dan ganjil
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

//Mengubah warna
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

//dom dan checkbox menu makanan
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});
function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// Validasi Form Nama dan Nilai
function validasiForm(event) {
  event.preventDefault();

  const nama = document.getElementById("namaValidasi").value.trim();
  const inputNilai = document.getElementById("nilaiValidasi").value.trim();
  const nilai = Number(inputNilai);
  const pesan = document.getElementById("pesanValidasi");

  if (nama === "") {
    pesan.textContent = "Nama tidak boleh kosong.";
    pesan.style.color = "red";
    return;
  }

  if (inputNilai === "" || Number.isNaN(nilai) || nilai < 0 || nilai > 100) {
    pesan.textContent = "Nilai harus berupa angka antara 0 sampai 100.";
    pesan.style.color = "red";
    return;
  }

  pesan.textContent = `Validasi berhasil! Nama: ${nama}, Nilai: ${nilai}`;
  pesan.style.color = "green";
}
