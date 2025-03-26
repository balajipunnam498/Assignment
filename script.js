function selectCard(card, price) {
    document.querySelectorAll('.bundle-card').forEach(c => {
        c.classList.remove('selected');
        c.querySelector('.radio-btn').checked = false;
    });

    card.classList.add('selected');
    card.querySelector('.radio-btn').checked = true;
    document.querySelector('.total-price strong').innerText = `DKK ${price.toFixed(2)}`;
}
document.querySelectorAll('.bundle-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
    });

    card.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
    });
});
