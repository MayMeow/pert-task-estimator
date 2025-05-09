const pertTasks = [];

function addPERTTask() {
    const name = document.getElementById('subtask').value.trim();
    const o = parseFloat(document.getElementById('opt').value);
    const m = parseFloat(document.getElementById('ml').value);
    const p = parseFloat(document.getElementById('pes').value);

    if (!name || isNaN(o) || isNaN(m) || isNaN(p) || o < 0 || m < 0 || p < 0) {
    alert('Please enter a valid subtask and all time values.');
    return;
    }

    const estimate = (o + 4 * m + p) / 6;
    pertTasks.push({ name, o, m, p, estimate });
    
    // Clear inputs
    document.getElementById('subtask').value = '';
    document.getElementById('opt').value = '';
    document.getElementById('ml').value = '';
    document.getElementById('pes').value = '';

    renderPERTTable();
    updatePERTSummary();
}

function renderPERTTable() {
    const tbody = document.querySelector('#pertTable tbody');
    tbody.innerHTML = '';
    pertTasks.forEach(task => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.o}</td>
        <td>${task.m}</td>
        <td>${task.p}</td>
        <td>${task.estimate.toFixed(2)}</td>
    `;
    tbody.appendChild(row);
    });

    document.getElementById('pertTable').style.display = 'table';
    document.getElementById('summary').style.display = 'block';
}

function updatePERTSummary() {
    const total = pertTasks.reduce((sum, t) => sum + t.estimate, 0);
    const bufferPercent = parseFloat(document.getElementById('buffer').value) || 0;
    const final = total + (total * bufferPercent / 100);

    document.getElementById('pertTotal').textContent = total.toFixed(2);
    document.getElementById('pertFinal').textContent = final.toFixed(2);
}
