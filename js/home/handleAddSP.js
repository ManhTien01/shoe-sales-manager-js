const arr = []

function addSP(id) {
    let idSP = parseInt(id)
    const gioHang = {
        idSP: idSP,
        quantity: 1

    }
    if (!app.getData(keyLocalStorageItemCart)) {
        arr.push(gioHang)
        app.saveData(keyLocalStorageItemCart, arr, handleTypeCatingCard)
    }
    else {
        const listCartItemsStorage = app.getData(keyLocalStorageItemCart, handleTypeCatingCard)
        const indexItem = listCartItemsStorage.indexOf(listCartItemsStorage.find(item => item.idSP === idSP));
        if (indexItem < 0) {

            listCartItemsStorage.push(gioHang)
            app.saveData(keyLocalStorageItemCart, listCartItemsStorage, handleTypeCatingCard)
        }
        else {
            const arrCart = getbyidSP()
            item = arrCart.find(item => item.idSP === idSP)
            const quantity = listCartItemsStorage[indexItem].quantity += 1
            if (quantity <= item.soLuong) {
                app.saveData(keyLocalStorageItemCart, listCartItemsStorage, handleTypeCatingCard)
            }
            else {
                alert('Số lượng của sản phẩm trong giỏ hàng đã vượt số lượng của sản phẩm!')
            }
        }
    }

}

function handleClickAddSP(e) {
    let productId = e.target.getAttribute('data-id');

    const toast = `<div class="toast bg-success" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="d-flex">
                            <div class="toast-body text-white">
                            Đã thêm sản phẩm vào giỏ hàng.
                        </div>
                            <button type="button" class="btn-close me-2 m-auto btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>`

    showToast(toast, "list-cart")
    addSP(productId)
    getbyidSP()
    showItemCart()

}

const choosenSPs = document.querySelectorAll('.cart-btn-icon')
choosenSPs.forEach(choosenSP => {

    choosenSP.addEventListener('click', handleClickAddSP)

})

