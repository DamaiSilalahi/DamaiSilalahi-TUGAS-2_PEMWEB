    const rootDiv = document.querySelector('.root');

    // Buat heading form
    const formHeading = document.createElement('h1');
    formHeading.textContent = "Tugas-2 Praktikum Pemrograman Web";
    formHeading.classList.add('header');
    rootDiv.appendChild(formHeading);

    // Garis horizontal
    const lineBreak = document.createElement('hr');
    lineBreak.classList.add('heading-line');
    rootDiv.appendChild(lineBreak);

    // Container utama untuk form dan hasil
    const container = document.createElement('div');
    container.classList.add('container');
    rootDiv.appendChild(container);

    // Container form
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    container.appendChild(formContainer);

    // Form
    const form = document.createElement('form');
    form.id = 'dataForm';
    formContainer.appendChild(form);

    // Input Username
    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username';
    form.appendChild(usernameLabel);

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'username';
    usernameInput.placeholder = 'Damai Silalahi';
    usernameInput.required = true;
    form.appendChild(usernameInput);

    // Input NIM
    const nimLabel = document.createElement('label');
    nimLabel.textContent = 'NIM';
    form.appendChild(nimLabel);

    const nimInput = document.createElement('input');
    nimInput.type = 'text';
    nimInput.id = 'nim';
    nimInput.placeholder = '231401126';
    nimInput.required = true;
    form.appendChild(nimInput);

    // Input KOM
    const komLabel = document.createElement('label');
    komLabel.textContent = 'KOM';
    form.appendChild(komLabel);

    const komInput = document.createElement('input');
    komInput.type = 'text';
    komInput.id = 'kom';
    komInput.placeholder = 'C';
    komInput.required = true;
    form.appendChild(komInput);

    // Input Foto
    const photoLabel = document.createElement('label');
    photoLabel.textContent = 'Upload Photo';
    form.appendChild(photoLabel);

    const photoInput = document.createElement('input');
    photoInput.type = 'file';
    photoInput.id = 'photo';
    photoInput.required = true;
    form.appendChild(photoInput);

    // Tombol submit
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    // Container hasil preview
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    container.appendChild(resultContainer);

    // Elemen untuk preview
    const photoPreview = document.createElement('img');
    resultContainer.appendChild(photoPreview);

    const usernamePreview = document.createElement('p');
    resultContainer.appendChild(usernamePreview);

    const nimPreview = document.createElement('p');
    resultContainer.appendChild(nimPreview);

    const komPreview = document.createElement('p');
    resultContainer.appendChild(komPreview);

    // Tampilkan notifikasi awal setelah elemen ditambahkan
    alert('Selamat datang! Silakan isi form di bawah.');

    // Event submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Tampilkan notifikasi form berhasil disubmit
        alert('Form berhasil disubmit!');

        // Tampilkan data di preview
        usernamePreview.textContent = `Username: ${usernameInput.value}`;
        nimPreview.textContent = `NIM: ${nimInput.value}`;
        komPreview.textContent = `KOM: ${komInput.value}`;

        // Preview foto
        const file = photoInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                photoPreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        // Geser form ke kiri dan tampilkan hasil
        formContainer.style.width = '38%';
        formContainer.style.padding = '5%';
        resultContainer.style.display = 'block';
        resultContainer.style.width = '35%';
    });
