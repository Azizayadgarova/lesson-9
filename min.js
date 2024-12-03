let buttons = document.querySelectorAll('.my-button');
let texts = document.querySelectorAll('.text');
let text2=document.querySelectorAll('.text2')


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Har bir tugma bosilganda tegishli narxni olish
        let price = parseFloat(text2[index].textContent);  // Narxni olish

        // Foydalanuvchidan qancha zakaz qilishini so'rash
        let orderQuantity = prompt('Nechta zakaz qilmoqchisiz?');

        if (orderQuantity !== null && !isNaN(orderQuantity) && orderQuantity > 0) {
            // Narxni ko'paytirish
            let totalPrice = price * orderQuantity;

            // Umumiy narxni foydalanuvchiga ko'rsatish
            alert(`Sizning umumiy narxingiz: ${totalPrice} so'm`);

            // Buyurtma tasdiqlash
            let confirmation = confirm(`Siz ${orderQuantity} ta zakaz bermoqchimisiz? Buyurtmani tasdiqlaysizmi?`);

            switch (confirmation) {
                case true:
                    alert('Buyurtmangiz tasdiqlandi!');
                    break;
                case false:
                    alert('Buyurtma bekor qilindi.');
                    break;
                default:
                    alert('Buyurtma tasdiqlanmagan.');
                    break;
            }
        } else {
            alert('Iltimos, to\'g\'ri son kiriting!');
        }
    });
});
