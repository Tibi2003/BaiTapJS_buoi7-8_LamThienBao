var danhSach = [];
function themSo() {
  var number = document.getElementById("number").value * 1;
  danhSach.push(number);
  var message = `<h3>Các số trong mảng: ${danhSach} </h3>`;
  document.getElementById("result").innerHTML = message;
}

// Câu 1: Tổng số dương
function tinhTong() {
  var sum = 0;
  for (var i = 0; i < danhSach.length; i++) {
    if (danhSach[i] > 0) {
      sum += danhSach[i];
    }
  }
  var message = `<h3>Tổng các số dương trong mảng là: ${sum} </h3>`;
  document.getElementById("result1").innerHTML = message;
}

// Câu 2: Đếm số dương
function soDuong() {
  var soDuong = 0;
  for (var i = 0; i < danhSach.length; i++) {
    if (danhSach[i] > 0) {
      soDuong++;
    }
  }
  var message = `<h3>Số lượng số dương có trong mảng là: ${soDuong} </h3>`;
  document.getElementById("result2").innerHTML = message;
}

// Câu 3: Tìm số nhỏ nhất
function soMin() {
  var soMin = danhSach[0];
  for (var i = 0; i < danhSach.length; i++) {
    if (soMin >= danhSach[i]) {
      soMin = danhSach[i];
    }
  }
  var message = `<h3>Số nhỏ nhất trong mảng là: ${soMin} </h3>`;
  document.getElementById("result3").innerHTML = message;
}

// Câu 4: Tìm số dương nhỏ nhất
function duongMin() {
  var duongMin = danhSach[0];
  for (var i = 0; i < danhSach.length; i++) {
    if (duongMin >= danhSach[i] && danhSach[i] > 0) {
      duongMin = danhSach[i];
    }
  }
  var message = `<h3>Số dương nhỏ nhất trong mảng là: ${duongMin} </h3>`;
  document.getElementById("result4").innerHTML = message;
}

// Câu 5: Tìm số chẵn cuối cùng
function chanCuoi() {
  var chanCuoi = 0;
  for (var i = 0; i < danhSach.length; i++) {
    if (danhSach[i] % 2 == 0) {
      chanCuoi = danhSach[i];
    }
  }
  var message = `<h3>Số chẵn cuối cùng trong mảng là: ${chanCuoi} </h3>`;
  document.getElementById("result5").innerHTML = message;
}

// Câu 6: Đổi chỗ 2 giá trị trong mảng
function doiCho() {
  var viTriCu = document.querySelector("#vitricu").value * 1;
  var viTriMoi = document.querySelector("#vitrimoi").value * 1;
  var bienChuyen = danhSach[viTriCu];
  danhSach.splice(viTriMoi, 0, bienChuyen);
  bienChuyen = danhSach[viTriMoi];
  danhSach.splice(viTriCu, 1);
  danhSach[viTriCu] = bienChuyen;
  var message = `<h3>Vị trí sau khi đổi trong mảng là: ${danhSach} </h3>`;
  document.getElementById("result6").innerHTML = message;
}
