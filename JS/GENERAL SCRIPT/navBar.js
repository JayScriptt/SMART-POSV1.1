document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.querySelector(".toggleBtn");

  // Function to close all open dropdowns
  function closeAllDropdowns() {
    const openDropdowns = sidebar.querySelectorAll(".subMenu.show");
    openDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("show");
      const dropdownBtn = dropdown.previousElementSibling;
      if (dropdownBtn && dropdownBtn.classList.contains("rotate")) {
        dropdownBtn.classList.remove("rotate");
      }
    });
  }

  // Function to close the sidebar and any open dropdowns
  function closeSidebar() {
    if (!sidebar.classList.contains("close")) {
      sidebar.classList.add("close");
      toggleBtn.classList.remove("rotate");
      closeAllDropdowns();
    }
  }

  // Event listener to toggle sidebar on button click
  toggleBtn.addEventListener("click", function (event) {
    sidebar.classList.toggle("close");
    toggleBtn.classList.toggle("rotate");

    // If the sidebar is being closed, also close all open dropdowns
    if (sidebar.classList.contains("close")) {
      closeAllDropdowns();
    }

    event.stopPropagation(); // Prevent click from propagating to document
  });

  // Event listener to close sidebar when clicking outside of it
  document.addEventListener("click", function (event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggleBtn = toggleBtn.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggleBtn) {
      closeSidebar();
    }
  });

  // Event listener to handle dropdown toggles
  const dropdownButtons = sidebar.querySelectorAll(".dropDownBtn");
  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const subMenu = button.nextElementSibling;
      if (subMenu) {
        subMenu.classList.toggle("show");
        button.classList.toggle("rotate");
      }
      event.stopPropagation(); // Prevent click from propagating to document
    });
  });
});
