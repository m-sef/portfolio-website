// Select all HTML elements where role="tab"
const tabs = document.querySelectorAll('[role="tab"]');
// Select all HTML elements where role="tabpanel"
const panels = document.querySelectorAll('[role="tabpanel"]');

selectTab(tabs[0])

tabs.forEach((tab) => {
    tab.addEventListener("click", function() {
        selectTab(tab);
    })
})

function selectTab(selectedTab) {
    // Set "aria-selected" on all tabs to "false"
    tabs.forEach((tab) => {
        tab.setAttribute("aria-selected", "false");
    })

    // Hide all panels
    panels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })

    // Set "aria-selected" on selectedTab to "true"
    selectedTab.setAttribute("aria-selected", "true");

    // Set the corresponding tab panel to not hidden
    document.querySelector(`[role="tabpanel"][data-tab="${selectedTab.dataset.tab}"]`).removeAttribute("hidden")
}
