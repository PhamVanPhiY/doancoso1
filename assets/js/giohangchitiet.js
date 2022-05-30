if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
   ready()
}

function ready(){
   var xoaKhoiGioHang = document.getElementsByClassName('btn-remove')
    for(var i = 0; i < xoaKhoiGioHang.length;i++){
   var button = xoaKhoiGioHang[i]
    button.addEventListener('click',removeCartItem)
   }
   var themVaoGioHang = document.getElementsByClassName('btn-themgiohang')
   for(var i = 0; i < themVaoGioHang.length;i++){
   var button = themVaoGioHang[i]
   button.addEventListener('click',addToCartClicked )
   }

  

}
function removeCartItem(event){
   var buttonClicked =event.target
   buttonClicked.parentElement.parentElement.remove() 
   console.log(buttonClicked)
}
removeCartItem()
function addToCartClicked(event){
    var button = event.target
    var sanpham = button.parentElement.parentElement.parentElement
  

   var tensanpham = sanpham.getElementsByClassName('title')[0].innerText
   var giatien = sanpham.getElementsByClassName('price')[0].innerText
   var img = sanpham.getElementsByClassName('product-img')[0].src
//    addItemToCart(tensanpham,giatien,img)
//    removeCartItem()
     console.log(button)

}
addToCartClicked()
// function addItemToCart(tensanpham,giatien,img)
// {
//    var hangcuasanpham = document.createElement('li')
       
//    var gioHang = document.getElementsByClassName('header__cart-list-item')[0]
//    var tensanphamkiemtra = document.getElementsByClassName('home-product-item__name')
//    //Kiểm tra sản phẩm đã thêm vào giỏ hàng chưa 
  
//    var noidunghangcuasanpham = `
//                         <li class="header__cart-item">
//                            <img src="${img}" alt="Đang chạy" class="header__cart-img">
//                            <div class="header__cart-item-info">
//                                <div class="header__cart-item-head">
//                                    <h5 class="header__cart-item-name">${tensanpham}</h5>
//                                    <div class="header__cart-item-price-wrap">
//                                        <span class="header__cart-item-price">${giatien}</span>
//                                    <span class="header__cart-item-multiply">x</span>
//                                    <span class="header__cart-item-qnt">1</span>
//                                    </div>
//                                </div>
//                                <div class="header__cart-item-body">
                                   
//                                     <span class="header__cart-item-remove">Xóa</span>
//                                </div>
//                            </div>
//                        </li>`
//    hangcuasanpham.innerHTML = noidunghangcuasanpham
//    gioHang.append(hangcuasanpham)
//    hangcuasanpham.getElementsByClassName('header__cart-item-remove')[0].addEventListener('click',removeCartItem)
   
// }