// FUNGSI JAVASCRIPT UMUM
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("hidden");
}

function closeAllModals() {
    document.querySelectorAll(".modal").forEach(modal => modal.classList.add("hidden"));
}

document.addEventListener("click", event => {
    const modalButton = event.target.closest("[data-modal]");
    if (modalButton) openModal(modalButton.dataset.modal);

    if (event.target.classList.contains("modal-close") || event.target.classList.contains("modal")) {
        closeAllModals();
    }
});

function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2800);
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", e => {
            e.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const emailError = document.getElementById("emailError");
            const passwordError = document.getElementById("passwordError");
            emailError.textContent = "";
            passwordError.textContent = "";

            let valid = true;
            if (!email || !email.includes("@")) {
                emailError.textContent = "Email wajib diisi dengan format yang benar.";
                valid = false;
            }
            if (!password) {
                passwordError.textContent = "Password wajib diisi.";
                valid = false;
            }
            if (!valid) return;

            if (email === "admin@bukakita.com" && password === "admin123") {
                localStorage.setItem("isLoggedInBukuKita", "true");
                alert("Login berhasil. Selamat datang di BukuKita!");
                window.location.href = "dashboard.html";
            } else {
                alert("email/password yang anda masukkan salah");
            }
        });
    }

    const forgotForm = document.getElementById("forgotForm");
    if (forgotForm) forgotForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Instruksi reset password telah disimulasikan untuk email tersebut.");
        closeAllModals();
        e.target.reset();
    });

    const registerForm = document.getElementById("registerForm");
    if (registerForm) registerForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Pendaftaran berhasil disimulasikan. Silakan gunakan akun demo untuk login.");
        closeAllModals();
        e.target.reset();
    });

    const logout = document.getElementById("logoutBtn");
    if (logout) logout.addEventListener("click", () => {
        localStorage.removeItem("isLoggedInBukuKita");
        window.location.href = "login.html";
    });
});
