// MẢNG ĐỂ LƯU LẠI CÁC STUDENT
let students = [];

// biến kiểm tra xem form đã được submit hay chưa
let isSubmitted = false;

function addStudent() {
  // B1: DOM
  // let id = document.getElementById("txtMaSV").value;
  // let name = document.getElementById("txtTenSV").value;
  // let email = document.getElementById("txtEmail").value;
  // let password = document.getElementById("txtPass").value;
  // let dateOfBirth = document.getElementById("txtNgaySinh").value;
  // let course = document.getElementById("khSV").value;
  // let math = +document.getElementById("txtDiemToan").value;
  // let physics = +document.getElementById("txtDiemLy").value;
  // let chemistry = +document.getElementById("txtDiemHoa").value;

  //   B2: KHỞI TẠO ĐỐI TƯỢNG STUDENT
  // let student = new Student(
  //   id,
  //   name,
  //   email,
  //   password,
  //   dateOfBirth,
  //   course,
  //   math,
  //   physics,
  //   chemistry
  // );

  // validate(student);
  isSubmitted = true;

  let student = validate();
  if (!student) {
    return;
  }

  // B3 : THÊM STUDENT VÀO DANH SÁCH - MẢNG
  students.push(student);

  // B4 : HIỂN THỊ DANH SÁCH STUDENT
  display(students);

  // B5 : RESET LẠI
  resetForm();
}

function display(students) {
  let html = students.reduce((result, value) => {
    return (
      result +
      `
    <tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.dateOfBirth}</td>
        <td>${value.course}</td>
        <td>${value.calcScore()}</td>
        <td>
        <button onclick="selectStudent('${
          value.id
        }')" class="btn btn-success">Chỉnh Sửa</button>
        <button onclick="removeStudent('${
          value.id
        }')" class="btn btn-danger">Xóa</button>
        </td>
    </tr>
    `
    );
  }, "");

  document.getElementById("tbodySinhVien").innerHTML = html;
}

function displayStudent() {
  display(students);
}

function resetForm() {
  isSubmitted = false;
  // B1: DOM
  let id = document.getElementById("txtMaSV");
  let name = document.getElementById("txtTenSV");
  let email = document.getElementById("txtEmail");
  let password = document.getElementById("txtPass");
  let dateOfBirth = document.getElementById("txtNgaySinh");
  let course = document.getElementById("khSV");
  let math = document.getElementById("txtDiemToan");
  let physics = document.getElementById("txtDiemLy");
  let chemistry = document.getElementById("txtDiemHoa");

  // B2: CHO NÓ BẰNG CHUỖI RỖNG
  id.value = "";
  name.value = "";
  email.value = "";
  password.value = "";
  dateOfBirth.value = "";
  course.value = "";
  math.value = "";
  physics.value = "";
  chemistry.value = "";

  document.getElementById("txtMaSV").disabled = false;
  document.getElementById("addButton").disabled = false;

  document.getElementById("spanMaSV").innerHTML = "";
  document.getElementById("spanTenSV").innerHTML = "";
  document.getElementById("spanEmailSV").innerHTML = "";
  document.getElementById("spanMatKhau").innerHTML = "";
  document.getElementById("spanNgaySinh").innerHTML = "";
  document.getElementById("spanKhoaHoc").innerHTML = "";
  document.getElementById("spanKhoaHoc").innerHTML = "";
  document.getElementById("spanToan").innerHTML = "";
  document.getElementById("spanHoa").innerHTML = "";
  document.getElementById("spanLy").innerHTML = "";
}

function removeStudent(studentId) {
  //     CÁCH 1 :
  //   // Tìm index của phần tử có id khớp với giá trị studentId
  //   let index = students.findIndex((value) => {
  //     return value.id === studentId;
  //   });
  //   console.log(index);

  //   if (index !== -1) {
  //     students.splice(index, 1);
  //   }

  //   display(students);

  // CÁCH 2 :
  students = students.filter((value) => {
    return value.id !== studentId;
  });

  display(students);
}

function findStudent() {
  // B1 : DOM INPUT
  let search = document.getElementById("txtSearch").value;
  search = search.trim(); //xóa bỏ khoảng trắng đầu cuối
  search = search.toLowerCase();

  // B2 : LỌC
  let newStudents = students.filter((value) => {
    let name = value.name.trim().toLowerCase();
    return name.includes(search);
  });

  // B3 : HIỂN THỊ LẠI
  if (newStudents.length === 0) {
    alert("Không có tên bạn cần tìm");
  }
  display(newStudents);
}

function selectStudent(studentId) {
  let student = students.find((value) => {
    return value.id === studentId;
  });

  // Fill thông tin của student lên giao diện
  document.getElementById("txtMaSV").value = student.id;
  document.getElementById("txtTenSV").value = student.name;
  document.getElementById("txtEmail").value = student.email;
  document.getElementById("txtPass").value = student.password;
  document.getElementById("txtNgaySinh").value = student.dateOfBirth;
  document.getElementById("khSV").value = student.course;
  document.getElementById("txtDiemToan").value = student.math;
  document.getElementById("txtDiemLy").value = student.physics;
  document.getElementById("txtDiemHoa").value = student.chemistry;

  // disable input mã sinh viên và button thêm sinh viên
  document.getElementById("txtMaSV").disabled = true;
  document.getElementById("addButton").disabled = true;
}

function updateStudent() {
  // // B1: DOM
  // let id = document.getElementById("txtMaSV").value;
  // let name = document.getElementById("txtTenSV").value;
  // let email = document.getElementById("txtEmail").value;
  // let password = document.getElementById("txtPass").value;
  // let dateOfBirth = document.getElementById("txtNgaySinh").value;
  // let course = document.getElementById("khSV").value;
  // let math = +document.getElementById("txtDiemToan").value;
  // let physics = +document.getElementById("txtDiemLy").value;
  // let chemistry = +document.getElementById("txtDiemHoa").value;
  // console.log(math);

  // //   B2: KHỞI TẠO ĐỐI TƯỢNG STUDENT
  // let student = new Student(
  //   id,
  //   name,
  //   email,
  //   password,
  //   dateOfBirth,
  //   course,
  //   math,
  //   physics,
  //   chemistry
  // );

  isSubmitted = true;

  let student = validate();
  if (!student) {
    return;
  }

  //B3 : TÌM INDEX CỦA PHẦN TỬ STUDENT CẦN CẬP NHẬT
  let index = students.findIndex((value) => {
    return value.id === student.id;
  });
  // thay thế phần tử thứ index cho object student mới tạo
  students[index] = student;

  // B4: HIỂN THỊ
  display(students);

  // B5: RESET FORM
  resetForm();
}

// HÀM KIỂM TRA GIÁ TRỊ CÓ RỖNG HAY KHÔNG
function isRequired(value) {
  // trim xỏa bỏ khảng trắng đầu và cuối
  if (!value.trim()) {
    // chuỗi rỗng là falsy value, !false => true , nếu true là chuỗi rỗng
    return false;
  }
  return true;
}

// HÀM KIỂM TRA MẬT KHẨU : ÍT NHẤT 8 KÍ TỰ, CÓ ÍT NHẤT 1 CHỮ HOA, 1 CHỮ THƯỜNG, 1 SỐ, 1 KÍ TỰ ĐẶC BIỆT
function isPassword(value) {
  let regex =
    /^(?=.*[A-Z])(?=.*[!&%\/()=\?\^\*\+\]\[#><;:,\._-|@])(?=.*[0-9])(?=.*[a-z]).{8,40}$/;

  // hàm test dành riêng cho chuỗi regex - regular expression , trả về boolean
  return regex.test(value);
}

// HÀM KIỂM TRA EMAIL
function isEmail(value) {
  let regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  return regex.test(value);
}

// Hàm kiểm tra điểm có hợp lệ hay không
function isScore(value) {
  if (isNaN(value)) {
    return false;
  }
  if (value < 0 || value > 10) {
    return false;
  }
  return true;
}

// HÀM KIỂM TRA TẤT CẢ GIÁ TRỊ TRÊN FORM CÓ HỢP LỆ HAY KHÔNG
function validate() {
  // B1: DOM
  let id = document.getElementById("txtMaSV").value;
  let name = document.getElementById("txtTenSV").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPass").value;
  let dateOfBirth = document.getElementById("txtNgaySinh").value;
  let course = document.getElementById("khSV").value;
  let math = document.getElementById("txtDiemToan").value;
  let physics = document.getElementById("txtDiemLy").value;
  let chemistry = document.getElementById("txtDiemHoa").value;

  // ở math, physics, và chemistry chưa ép kiểu để ktra rỗng

  let isValid = true;
  if (!isRequired(id)) {
    // true => false
    isValid = false;
    document.getElementById("spanMaSV").innerHTML = "Mã không được để trống";
  }

  if (!isRequired(name)) {
    // true => false
    isValid = false;
    document.getElementById("spanTenSV").innerHTML = "Tên không được để trống";
  }

  let emailSpan = document.getElementById("spanEmailSV");
  if (!isRequired(email)) {
    // true => false
    isValid = false;
    emailSpan.innerHTML = "Email không được để trống";
  } else if (!isEmail(email)) {
    isValid = false;
    emailSpan.innerHTML = "Email không hợp lệ";
  }

  let pwSpan = document.getElementById("spanMatKhau");
  if (!isRequired(password)) {
    // true => false
    isValid = false;
    let pwSpan = (document.getElementById("spanMatKhau").innerHTML =
      "Mật khẩu không được để trống");
  } else if (!isPassword(password)) {
    isValid = false;
    pwSpan.innerHTML = "Mật khẩu không hợp lệ";
  }

  if (!isRequired(dateOfBirth)) {
    // true => false
    isValid = false;
    document.getElementById("spanNgaySinh").innerHTML =
      "Ngày sinh không được để trống";
  }

  if (!isRequired(course)) {
    // true => false
    isValid = false;
    document.getElementById("spanKhoaHoc").innerHTML =
      "Khóa học không được để trống";
  }

  if (!isRequired(math)) {
    // true => false
    isValid = false;
    document.getElementById("spanToan").innerHTML =
      "Điểm toán không được để trống";
  } else if (!isScore(+math)) {
    isValid = false;
    document.getElementById("spanToan").innerHTML = "Điểm Toán không hợp lệ";
  }
  // } else if (typeof math == "string") {
  //   isValid = false;
  //   document.getElementById("spanToan").innerHTML = "Điểm Toán không hợp lệ";
  // }

  if (!isRequired(physics)) {
    // true => false
    isValid = false;
    document.getElementById("spanLy").innerHTML = "Điểm Lý không được để trống";
  } else if (!isScore(+physics)) {
    isValid = false;
    document.getElementById("spanLy").innerHTML = "Điểm Lý không hợp lệ";
  }

  if (!isRequired(chemistry)) {
    // true => false
    isValid = false;
    document.getElementById("spanHoa").innerHTML =
      "Điểm Hóa không được để trống";
  } else if (!isScore(+chemistry)) {
    isValid = false;
    document.getElementById("spanHoa").innerHTML = "Điểm Hóa không hợp lệ";
  }

  if (isValid) {
    let student = new Student(
      id,
      name,
      email,
      password,
      dateOfBirth,
      course,
      +math,
      +physics,
      +chemistry
    );

    return student;
  }

  //Form không hợp lệ => không tạo đối tượng student
  return undefined;
}

document.getElementById("txtMaSV").oninput = (event) => {
  // Tất cả sự kiện trong javascript đều nhận được đối tượng event
  // target trỏ tới các thằng được kích hoạt sự kiện
  if (!isSubmitted) return;

  let idSpan = document.getElementById("spanMaSV");
  // console.log(event.target.value)

  if (isRequired(event.target.value)) {
    // console.log(isRequired(event.target.value));
    idSpan.innerHTML = "";
  }
};

document.getElementById("txtTenSV").oninput = (event) => {
  let nameSpan = document.getElementById("spanTenSV");
  if (isRequired(event.target.value)) {
    nameSpan.innerHTML = "";
  } else {
    nameSpan.innerHTML = "Tên không được để trống";
  }
};
