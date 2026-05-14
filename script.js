
let hasil = document.getElementById("result");
let tombol = document.querySelectorAll(".btn");

tombol.forEach((t) => {
  t.onclick = () => {
    let angka = t.dataset.number;
    let idTombol = t.id;

    if (idTombol === "hapus") return (hasil.value = "0");
    if (idTombol === "kembali")
      return (hasil.value = hasil.value.slice(0, -1) || "0");
    if (idTombol === "sama") return (hasil.value = eval(hasil.value));
    if (idTombol === "tambah") return (hasil.value += "+");
    if (idTombol === "kurang") return (hasil.value += "-");
    if (idTombol === "kali") return (hasil.value += "*");
    if (idTombol === "bagi") return (hasil.value += "/");

    hasil.value = hasil.value === "0" ? angka : hasil.value + angka;
  };
});
