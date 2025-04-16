const API = 'http://127.0.0.1:8000/api';


//CRUD POST pour creer une salle
function createRoom() {
    const name = document.getElementById('name').value;
    const capacity = document.getElementById('capacity').value;
    fetch(`${API}/createRoom`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, capacity })
    }).then(response => response.json()).then(data => console.log(data));
}

//CRUD GET pour recuperer une salle ou la liste des salles
function listRooms() {
    fetch(`${API}/listRooms`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => response.json()).then(data => console.log(data));
}

function getRoom(id) {
    fetch(`${API}/getRoom/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => response.json()).then(data => console.log(data));
}


//on utilise le CRUD DELETE pour supprimer une salle
function deleteRoom(id) {
    fetch(`${API}/deleteRoom/${id}`, {
        method: 'DELETE'
    }).then(response => response.json()).then(data => console.log(data));
}


//ici on va utiliser le CRUD PATCH pour modifier les attributs d'une salle
function updateRoom(id) {
    const name = document.getElementById('name').value.trim();
    const capacity = document.getElementById('capacity').value;
    
    fetch(`${API}/getRoom/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(room => {
        const updatedData = {
            name: name !== '' ? name : room.name,
            capacity: capacity !== '' ? parseInt(capacity) : room.capacity
        };
        
        if (updatedData.capacity < 1) {
            showStatus('La capacité doit être supérieure à 0', true);
            return;
        }
        
        fetch(`${API}/updateRoom/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.error || 'Échec de la mise à jour');
                });
            }
            return response.json();
        })
        .then(data => {
            refreshRoomList();
            showStatus('Salle mise à jour avec succès');
        })
        .catch(error => {
            showStatus(error.message, true);
        });
    })
    .catch(error => {
        showStatus('Erreur lors de la récupération des données de la salle', true);
    });
}


//les fonctions en dessous sont pour l'interface utilisateur UI
function displayRooms(rooms) {
    const container = document.getElementById('rooms');
    container.innerHTML = '';
    
    if (!Array.isArray(rooms) || rooms.length === 0) {
        container.innerHTML = '<div class="alert alert-info">Aucune salle disponible</div>';
        return;
    }
    
    rooms.forEach(room => {
        const div = document.createElement('div');
        div.className = 'list-group-item';
        div.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="mb-1">Salle ${room.id}: ${room.name}</h5>
                    <small>Capacité: ${room.capacity}</small>
                </div>
                <div>
                    <button class="btn btn-sm btn-info me-2" onclick="getRoom(${room.id})">Voir</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteRoom(${room.id})">Supprimer</button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

function refreshRoomList() {
    const container = document.getElementById('rooms');
    container.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';
    
    fetch(`${API}/listRooms`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        if (!Array.isArray(data)) throw new Error('Invalid data format');
        displayRooms(data);
    })
    .catch(error => {
        console.error('Error:', error);
        container.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
    });
}

function showStatus(message, isError = false) {
    const statusEl = document.getElementById('zone-statut');
    statusEl.textContent = message;
    statusEl.classList.remove('d-none', 'alert-info', 'alert-success', 'alert-danger');
    statusEl.classList.add(isError ? 'alert-danger' : 'alert-success');
    setTimeout(() => statusEl.classList.add('d-none'), 3000);
    }
        
function createAndRefresh() {
    createRoom();
    setTimeout(refreshRoomList, 500);
    showStatus('Salle créée avec succès');
    }
        
function deleteAndRefresh() {
    const id = document.getElementById('room-id').value;
    if (id) {
        deleteRoom(id);
        setTimeout(refreshRoomList, 500);
        showStatus('Salle supprimée avec succès');
    } else {
        showStatus('Veuillez entrer un ID de salle', true);
    }
}
        
function updateNameAndRefresh() {
    const id = document.getElementById('room-id').value;
    if (id) {
        updateRoom(id);
    } else {
        showStatus('Veuillez entrer un ID de salle', true);
    }
}
        
function updateCapacityAndRefresh() {
    const id = document.getElementById('room-id').value;
    if (id) {
        updateRoom(id);
    } else {
        showStatus('Veuillez entrer un ID de salle', true);
    }
}
        
function getRoomDetails() {
    const id = document.getElementById('room-id').value;
    if (id) {
        getRoom(id);
        showStatus('Détails de la salle récupérés (voir console)');
    } else {
        showStatus('Veuillez entrer un ID de salle', true);
    }
}

document.addEventListener('DOMContentLoaded', refreshRoomList);