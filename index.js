const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

selectTab(tabs[0])

tabs.forEach((tab) => {
  tab.addEventListener("click", function() {
    selectTab(tab);
  })
})

function selectTab(tab) {
  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", "false")
  })

  panels.forEach((panel) => {
    panel.setAttribute("hidden", true)
  })

  tab.setAttribute("aria-selected", "true")

  document.getElementById(tab.getAttribute("aria-controls")).removeAttribute("hidden")
}