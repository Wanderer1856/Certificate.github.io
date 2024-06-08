
function setRecipientName() {
    let recipientName = prompt("Nhap ten nguoi nhan");
    document.getElementById('recipientName').innerText = recipientName;
}
function setManagerName() {
    let ManagerName = prompt("Nhap ten nguoi ky:");
    document.getElementById('manager').innerText = ManagerName;
}   

setManagerName();
setRecipientName();