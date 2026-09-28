// Simple rotating typing effect for the role line
  const roles = ["Software Developer", "Web Developer", "Game Developer"];
  const typedRole = document.getElementById("typedRole");
  let roleIndex = 0, charIndex = roles[0].length, deleting = true;
  function typeRole() {
    const current = roles[roleIndex];
    if (deleting) {
      charIndex--;
      typedRole.textContent = current.slice(0, Math.max(0, charIndex));
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 350);
        return;
      }
    } else {
      const next = roles[roleIndex];
      charIndex++;
      typedRole.textContent = next.slice(0, charIndex);
      if (charIndex >= next.length) {
        deleting = true;
        setTimeout(typeRole, 1500);
        return;
      }
    }
    setTimeout(typeRole, deleting ? 55 : 95);
  }
  setTimeout(typeRole, 1800);

  // Show the back-to-top button after scrolling
  const topBtn = document.getElementById("topBtn");
  window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 350);
  });
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
