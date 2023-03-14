const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$('.tab-item');
const panes = $$('.tab-pane');
const line = $('.tabs .line');

line.style.left = $('.tab-item.active').offsetLeft + 'px';
line.style.width = $('.tab-item.active').offsetWidth + 'px'; 


items.forEach((item, index) => {
    item.onclick = function() {
        pane = panes[index];
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px'; 
        

    }
})