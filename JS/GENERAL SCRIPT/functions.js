function showModule(moduleNumber) {
  document
    .querySelectorAll(".module")
    .forEach((module) => module.classList.remove("active"));
  document.getElementById("module" + moduleNumber).classList.add("active");
  if (moduleNumber === 6) loadModuleContent("orderContainer", milkTeaOptions);
}
