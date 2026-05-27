// Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Modals
const modalButtons = [
    {
        open: "openNP",
        modal: "npModal"
    },
    {
        open: "openBronze",
        modal: "bronzeModal"
    },
    {
        open: "openSilver",
        modal: "silverModal"
    },
    {
        open: "openGold",
        modal: "goldModal"
    }
];

modalButtons.forEach(item => {
    const button = document.getElementById(item.open);
    const modal = document.getElementById(item.modal);

    button.addEventListener("click", () => {
        modal.showModal();
    });

    modal.querySelector(".close").addEventListener("click", () => {
        modal.close();
    });
});