const API = "http://localhost:5000";

const regForm = document.getElementById("registerForm");
const msg = document.getElementById("msg");

if (regForm) {
    regForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        msg.textContent = "";
        msg.style.color = "red";

        // frontend validation
        if (!username.value || !email.value || !password.value) {
            msg.textContent = "All fields are required";
            return;
        }

        if (!email.value.includes("@")) {
            msg.textContent = "Invalid email address";
            return;
        }

        if (password.value.length < 6) {
            msg.textContent = "Password must be at least 6 characters";
            return;
        }

        // send request only if valid
        const body = {
            username: username.value.trim(),
            email: email.value.trim(),
            password: password.value
        };

        try {
            const res = await fetch(`${API}/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const data = await res.json();

            if (!res.ok) {
                msg.textContent = data.message || "Registration failed";
                return;
            }

            msg.style.color = "green";
            msg.textContent = data.message || "User registered successfully";

            // optional: redirect to login after 1.5s
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);

        } catch (error) {
            msg.textContent = "Server error. Try again later.";
        }
    });
}

