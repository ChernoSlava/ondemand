document.addEventListener("DOMContentLoaded", function () {
    const idCreationElement = document.getElementById("id-creation");
    if (idCreationElement) {
        idCreationElement.style.opacity = "0";
        idCreationElement.style.transform = "translateY(-20px)";

        setTimeout(() => {
            idCreationElement.style.opacity = "1";
            idCreationElement.style.transform = "translateY(0)";
        }, 500);
    }
});
