const URL = 'http://127.0.0.1:8000/api';

function uploadFile(fichier) {
    const formData = new FormData();
    formData.append('file', fichier);
    
    return new Promise((resolve, reject) => {
        fetch(`${URL}/upload`, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}

//fonction qui va recuperer la liste des fichiers 
async function getFilesList() {
    // Only fetch when explicitly called, no auto-refresh logic
    return new Promise((resolve, reject) => {
        fetch(`${URL}/files`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}


//fonction qui va afficher les fichiers
function displayFiles(files) {
    const container = document.getElementById('liste-fichiers');
    if (!container) return;
    
    if (!files || files.length === 0) {
        container.innerHTML = '<p>No files available</p>';
        return;
    }
    
    const html = files.map(url => {
        const name = url.split('/').pop();
        return `
        <li>
            <div><span>${name}</span></div>
            <div><a href="${url}" target="_blank">Download</a></div>
        </li>`;
    }).join('');
    
    container.innerHTML = `<ul>${html}</ul>`;
}

//fonction qui va afficher le statut de l'operation
function showStatus(message, type) {
    const statusEl = document.getElementById('zone-statut');
    if (!statusEl) return;
    
    statusEl.textContent = message;
    statusEl.className = `statut statut-${type}`;
    
    if (type === 'succes' || type === 'info') {
        setTimeout(() => {
            statusEl.textContent = '';
            statusEl.className = 'statut';
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-upload-fichier');
    const fileInput = document.getElementById('input-fichier');
    const refreshBtn = document.getElementById('btn-rafraichir');
    
    // fonction pour charger et afficher les fichiers
    function loadFiles() {
        showStatus('Chargement...', 'info');
        
        getFilesList()
            .then(files => {
                displayFiles(files);
                showStatus('Liste chargée avec successe', 'succes');
            })
            .catch(err => {
                console.error('Erreur de chargement:', err);
                showStatus(`Error: ${err.message}`, 'erreur');
            });
    }
    


    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            if (!fileInput || !fileInput.files[0]) {
                showStatus('Selectionnez un fichier', 'erreur');
                return;
            }
            
            showStatus('Uploading...', 'info');
            
            uploadFile(fileInput.files[0])
                .then(result => {
                    showStatus(`File uploaded successfully`, 'succes');
                    form.reset();
                    return getFilesList();
                })
                .then(files => displayFiles(files))
                .catch(err => {
                    console.error('Upload error:', err);
                    showStatus(`Error: ${err.message}`, 'erreur');
                });
        });
    } else {
        console.error('Form element not found');
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', loadFiles);
    } else {
        console.error('Refresh button is not found');
    }

    const container = document.getElementById('liste-fichiers');
    if (container) {
        container.innerHTML = '<p>Click the Refresh button to load files</p>';
    }
    
});