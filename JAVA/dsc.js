document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'password') {
        // Đăng nhập thành công
        alert('Đăng nhập thành công!');
        // Điều hướng đến trang chính
        window.location.href = '../page.html'; // Thay 'homepage.html' bằng đường dẫn của trang chính
    } else {
        // Hiển thị thông báo lỗi
        document.getElementById('error-message').innerText = 'Tên đăng nhập hoặc mật khẩu không đúng.';
    }
});
