function myFunction() {
  // Lấy các trường input từ form
  const name = document.querySelector('input[placeholder="Nguyễn Văn A"]');
  const phone = document.querySelector('input[placeholder="VD : 09783426752"]');
  const address = document.querySelector(
    'input[placeholder="Số nhà - Đường - Phường - Quận"]'
  );
  const city = document.querySelector('input[placeholder="VD : Hà Nội"]');
  const country = document.querySelector('input[placeholder="VD : Việt Nam"]');
  const zip = document.querySelector('input[placeholder="VD : 123 456"]');
  const cardName = document.querySelector(
    'input[placeholder="VD : Nguyễn Văn A"]'
  );
  const cardNumber = document.querySelector(
    'input[placeholder="1111-2222-3333-4444"]'
  );
  const expMonth = document.querySelector('input[placeholder="VD : 10"]');
  const expYear = document.querySelector('input[placeholder="VD : 2022"]');
  const cvv = document.querySelector('input[placeholder="1234"]');

  // Tạo mảng lưu thông báo lỗi
  const errorMessages = [];

  // Kiểm tra các trường trống
  if (!name.value.trim())
    errorMessages.push("Tên khách hàng không được để trống");
  if (!phone.value.trim())
    errorMessages.push("Số điện thoại không được để trống");
  if (!address.value.trim()) errorMessages.push("Địa chỉ không được để trống");
  if (!city.value.trim()) errorMessages.push("Thành phố không được để trống");
  if (!country.value.trim()) errorMessages.push("Quốc gia không được để trống");
  if (!zip.value.trim()) errorMessages.push("Mã Zip không được để trống");
  if (!cardName.value.trim())
    errorMessages.push("Tên trên thẻ không được để trống");
  if (!cardNumber.value.trim())
    errorMessages.push("Số thẻ tín dụng không được để trống");
  if (!expMonth.value.trim())
    errorMessages.push("Tháng hết hạn không được để trống");
  if (!expYear.value.trim())
    errorMessages.push("Năm hết hạn không được để trống");
  if (!cvv.value.trim()) errorMessages.push("CVV không được để trống");

  // Kiểm tra các định dạng khác
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone.value)) {
    errorMessages.push("Số điện thoại phải có 10 số");
  }

  const zipRegex = /^\d{6}$/;
  if (!zipRegex.test(zip.value)) {
    errorMessages.push("Mã Zip phải có 6 số");
  }

  if (cardNumber.value.length < 10) {
    errorMessages.push("Số thẻ tín dụng phải có ít nhất 10 số");
  }

  const month = parseInt(expMonth.value, 10);
  if (isNaN(month) || month < 1 || month > 12) {
    errorMessages.push("Tháng hết hạn phải nằm trong khoảng 1 đến 12");
  }

  const year = parseInt(expYear.value, 10);
  if (isNaN(year) || year < 2024) {
    errorMessages.push("Năm hết hạn phải lớn hơn hoặc bằng 2024");
  }

  if (cvv.value.length !== 3) {
    errorMessages.push("CVV phải có đúng 3 chữ số");
  }

  // Hiển thị lỗi nếu có
  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
    return;
  }

  // Nếu không có lỗi
  alert("Thanh toán thành công");
}

// Sự kiện để làm mới trang khi nhấp vào ảnh
document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector("img[src='images/card_img.png']");
  if (image) {
    image.addEventListener("click", function () {
      location.reload();
    });
  }
});

// Sự kiện chọn phương thức thanh toán
document.addEventListener("DOMContentLoaded", function () {
  const paymentOptions = document.querySelectorAll(".payment-option");

  paymentOptions.forEach((option) => {
    option.addEventListener("click", function () {
      paymentOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
    });
  });
});
