// document.addEventListener('DOMContentLoaded', () => {
//     const noButton = document.querySelector('.no');
//     const yesButton = document.querySelector('.yes');
//     const container = document.querySelector('.container');

//     noButton.addEventListener('mouseover', () => {
//         const containerRect = container.getBoundingClientRect();
//         const buttonRect = noButton.getBoundingClientRect();
//         const offset = 20;

//         let newTop = Math.random() * (containerRect.height - buttonRect.height - offset);
//         let newLeft = Math.random() * (containerRect.width - buttonRect.width - offset);

//         noButton.style.top = `${newTop}px`;
//         noButton.style.left = `${newLeft}px`;
//     });

//     yesButton.addEventListener('click', () => {
//         window.location.href = 'thankyou.html';
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.no');
    const yesButton = document.querySelector('.yes');
    const container = document.querySelector('.container');

    noButton.addEventListener('click', () => {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
        const offset = 20;

        let newTop = Math.random() * (containerRect.height - buttonRect.height - offset);
        let newLeft = Math.random() * (containerRect.width - buttonRect.width - offset);

        noButton.style.position = 'absolute';
        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;
    });

    yesButton.addEventListener('click', () => {
        window.location.href = 'thankyou.html';
    });
});
