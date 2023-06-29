// MẢNG ĐỂ LƯU LẠI CÁC STUDENT
let students = [];

function addStudent() {
  // B1: DOM
  let id = document.getElementById("txtMaSV").value;
  let name = document.getElementById("txtTenSV").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPass").value;
  let dateOfBirth = document.getElementById("txtNgaySinh").value;
  let course = document.getElementById("khSV").value;
  let math = +document.getElementById("txtDiemToan").value;
  let physics = +document.getElementById("txtDiemLy").value;
  let chemistry = +document.getElementById("txtDiemHoa").value;

  //   B2: KHỞI TẠO ĐỐI TƯỢNG STUDENT
  let student = new Student(
    id,
    name,
    email,
    password,
    dateOfBirth,
    course,
    math,
    physics,
    chemistry
  );

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
  // B1: DOM
  let id = document.getElementById("txtMaSV").value;
  let name = document.getElementById("txtTenSV").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPass").value;
  let dateOfBirth = document.getElementById("txtNgaySinh").value;
  let course = document.getElementById("khSV").value;
  let math = +document.getElementById("txtDiemToan").value;
  let physics = +document.getElementById("txtDiemLy").value;
  let chemistry = +document.getElementById("txtDiemHoa").value;

  //   B2: KHỞI TẠO ĐỐI TƯỢNG STUDENT
  let student = new Student(
    id,
    name,
    email,
    password,
    dateOfBirth,
    course,
    math,
    physics,
    chemistry
  );

  //B3 : TÌM INDEX CỦA PHẦN TỬ STUDENT CẦN CẬP NHẬT
  let index = students.findIndex((value) => {
    return (value.id = id);
  });
  // thay thế phần tử thứ index cho object student mới tạo
  students[index] = student;

  // B4: HIỂN THỊ
  display(students);

  // B5: RESET FORM
  resetForm();
}
