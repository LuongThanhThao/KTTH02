function BAI2(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const option = document.getElementById("service");
    const optionText = option.options[option.selectedIndex].text;
    const mathe = document.getElementById("code").value;   
    const mahoadon = document.getElementById("model").value;
    const textarea = document.getElementById("input-description").value;
window.alert("Họ và tên" +name +"\n Mã thẻ:" + mathe +"\n Số điện thoại:"+ phone +"Email:" +email +"\n Mã hoá đơn:"+mahoadon +"\n Loại KH :" +optionText +"\n Nội dung góp ý "+ textarea
);
}
