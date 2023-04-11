const sideMenu = document.querySelector('aside');
const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');
const themeToggler = document.querySelector('.theme-toggler');

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
})

// fill orders
// Orders.forEach(order => {
//     const tr = document.createElement('tr');
//     const trContent = '
//         <td>${order.productName}</td>
//         <td>${order.productNumber}</td>
//         <td>${order.paymentStatus}</td>
//         <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : order.shipping ? 'primary'>${order.shipping}</td>
//         <td class='primary'>Details</td>';
//     tr.innerHTML =trContent;
//     document.querySelector('table tbody').appendChild(tr);
// })