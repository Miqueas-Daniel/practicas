const boxes = document.querySelectorAll('.box');
const container = document.querySelector('.container');


boxes.forEach((box, index) => {
    box.addEventListener('dragstart', (e) => {
        container.classList.add('container__animation');
        e.dataTransfer.setData('id', index);
    });
});


boxes.forEach((box) => {
    box.addEventListener('dragend', (e) => {
        e.preventDefault();
        container.classList.remove('container__animation');
    });
});





let terminado = boxes.length;

for (i = 0; i < boxes.length; i++) {
    const div = document.createElement('div');
    div.className = 'each__position';
    div.dataset.id = i;
    div.innerText = `${i + 1}`;
    container.append(div);
}





container.addEventListener('dragover', (e) => {
    e.preventDefault();

    if (e.target.className == 'each__position') {
        e.target.classList.add('hover');
    }
});


container.addEventListener('dragleave', (e) => {
    if (e.target.classList[0] == 'each__position') {
        e.target.classList.remove('hover');
    }
});


container.addEventListener('drop', (e) => {

    const id = e.dataTransfer.getData('id');

    if (e.target.classList[0] == 'each__position') {
        e.target.classList.remove('hover');

        if (e.target.dataset.id == id) {
            e.target.innerText = '';
            e.target.append(boxes[id]);

            terminado--;

            if (terminado == 0) {
                setTimeout(() => {
                    document.querySelector('.boxes').classList.add('boxes__ganaste');
                    container.classList.add('container__ganaste');
                }, 300);

                setTimeout(() => {
                    container.style.transform = 'scale(10)';
                    container.style.opacity = '0';
                }, 2800);

                setTimeout(() => {
                    document.querySelector('.overall__container').style.display = 'none';
                }, 3300);

                setTimeout(() => {
                    location.reload();
                }, 4300);
            }
        }
    }
});