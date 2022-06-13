function createMenu() {
    let all = document.createElement('div');
    all.className = 'mainMenu';
    all.id = 'mainMenu';
    let div = document.createElement('div');
    div.className = 'divFontSize';
    let selectFont = document.createElement('select');
    selectFont.id = 'selectFontSize';
    // for select options
    let start = 10;
    for (let i = 0; i < 10; i++) {
        let opt = document.createElement('option');
        opt.value = `${start}`;
        let optTextNode = document.createTextNode(`${start}`);
        opt.appendChild(optTextNode);
        start += 2;
        selectFont.appendChild(opt);
    }
    div.appendChild(selectFont);
    all.appendChild(div);
    document.body.appendChild(all);
}
createMenu();