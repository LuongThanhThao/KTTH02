function TinhBMI() {
  var cannang = parseFloat(document.getElementById("cannang").value);
  if (isNaN(cannang) || cannang <= 0) {
    alert("Vui lòng nhập số cân nặng hợp lệ (số dương)");
    return;
  }

  var chieucao = parseFloat(document.getElementById("chieucao").value);
  if (isNaN(chieucao) || chieucao <= 0) {
    alert("Vui lòng nhập số chiều cao hợp lệ (số dương)");
    return;
  }

  var tuoiElement = document.getElementById("tuoi");
  var tuoi = tuoiElement.value;
  if (tuoi === "") {
    alert("Vui lòng chọn loại tuổi!");
    return;
  }
  var bmi  = parseFloat(document.getElementById("tinhbmi").value);

  var resultElement = document.getElementById("result");

  // Tính BMI
  var bmi = cannang / (chieucao * chieucao);

  // Phân loại BMI
  var bmiCategory;
  var bmiMessage;
  if (bmi < 18.5) {
    bmiCategory = "Dưới chuẩn";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = "Bình thường";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = "Thừa cân";
  } else if (bmi >= 30 && bmi <= 34.9) {
    bmiCategory = "Béo phì cấp độ 1";
    bmiMessage = "Bạn nên ĐI KHÁM ĐỊNH KỲ";
  } else if (bmi >= 35 && bmi <= 39.9) {
    bmiCategory = "Béo phì cấp độ 2";
    bmiMessage = "Bạn nên TẬP THỂ DỤC THƯỜNG XUYÊN.";
  } else {
    bmiCategory = "Béo phì cấp độ 3";
    bmiMessage = "Hạn chế ăn mỡ động vật.";
  }

  // Hiển thị kết quả
  resultElement.innerHTML = `
    Chỉ số BMI của bạn là: ${bmi.toFixed(2)}<br>
    Phân loại BMI: ${bmiCategory}<br>
    ${bmiMessage}
  `;
}
 

