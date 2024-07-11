const baseUrl = 'http://localhost:3000';

function clearAllResponses() {
    document.querySelectorAll('.result-box').forEach(box => box.innerText = '');
}

// Users
function getAllUsers() {
    clearAllResponses();
    document.getElementById('getAllUsersRequest').innerText = `GET: ${baseUrl}/users`;
    fetch(`${baseUrl}/users`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('getAllUsersResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('getAllUsersResponse').innerText = 'Error: ' + error.message;
        });
}




function getUserById() {
    clearAllResponses();
    const id = prompt('Enter User ID:');
    const url = `${baseUrl}/users/${id}`;
    document.getElementById('getUserByIdRequest').innerText = `GET: ${url}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('getUserByIdResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('getUserByIdResponse').innerText = 'Error: ' + error.message;
        });
}




function createUser() {
    clearAllResponses();
    const userData = prompt('Enter User Data (JSON format):');
    document.getElementById('createUserRequest').innerText = 'POST: ' + baseUrl + '/users\n' + userData;
    fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: userData
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('createUserResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('createUserResponse').innerText = 'Error: ' + error.message;
        });
}

function updateUser() {
    clearAllResponses();
    const userId = prompt('Enter User ID:');
    const userData = prompt('Enter User Data (JSON format):');
    const url = `${baseUrl}/users/${userId}`;
    document.getElementById('updateUserRequest').innerText = 'PUT: ' + url + '\n' + userData;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: userData
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('updateUserResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('updateUserResponse').innerText = 'Error: ' + error.message;
        });
}

function deleteUser() {
    clearAllResponses();
    const userId = prompt('Enter User ID:');
    const url = `${baseUrl}/users/${userId}`;
    document.getElementById('deleteUserRequest').innerText = 'DELETE: ' + url;
    fetch(url, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('deleteUserResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('deleteUserResponse').innerText = 'Error: ' + error.message;
        });
}

// Texts
function getAllTexts() {
    clearAllResponses();
    document.getElementById('getAllTextsRequest').innerText = `GET: ${baseUrl}/texts`;
    fetch(`${baseUrl}/texts`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('getAllTextsResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('getAllTextsResponse').innerText = 'Error: ' + error.message;
        });
}

function getTextById() {
    clearAllResponses();
    const id = prompt('Enter Text ID:');
    const url = `${baseUrl}/texts/${id}`;
    document.getElementById('getTextByIdRequest').innerText = `GET: ${url}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('getTextByIdResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('getTextByIdResponse').innerText = 'Error: ' + error.message;
        });
}

function createText() {
    clearAllResponses();
    const textData = prompt('Enter Text Data (JSON format):');
    document.getElementById('createTextRequest').innerText = 'POST: ' + baseUrl + '/texts\n' + textData;
    fetch(`${baseUrl}/texts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: textData
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('createTextResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('createTextResponse').innerText = 'Error: ' + error.message;
        });
}

function updateText() {
    clearAllResponses();
    const textId = prompt('Enter Text ID:');
    const textData = prompt('Enter Text Data (JSON format):');
    const url = `${baseUrl}/texts/${textId}`;
    document.getElementById('updateTextRequest').innerText = 'PUT: ' + url + '\n' + textData;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: textData
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('updateTextResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('updateTextResponse').innerText = 'Error: ' + error.message;
        });
}

function deleteText() {
    clearAllResponses();
    const textId = prompt('Enter Text ID:');
    const url = `${baseUrl}/texts/${textId}`;
    document.getElementById('deleteTextRequest').innerText = 'DELETE: ' + url;
    fetch(url, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('deleteTextResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('deleteTextResponse').innerText = 'Error: ' + error.message;
        });
}



function getWordCount() {
    clearAllResponses();
    const content = prompt('Enter Text Content:');
    document.getElementById('getWordCountRequest').innerText = 'POST: ' + baseUrl + '/texts/word-count\n' + content;
    fetch(`${baseUrl}/texts/word-count`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('getWordCountResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('getWordCountResponse').innerText = 'Error: ' + error.message;
        });
}

function getCharacterCount() {
    clearAllResponses();
    const content = prompt('Enter Text Content:');
    document.getElementById('getCharacterCountRequest').innerText = 'POST: ' + baseUrl + '/texts/character-count\n' + content;
    fetch(`${baseUrl}/texts/character-count`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('getCharacterCountResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('getCharacterCountResponse').innerText = 'Error: ' + error.message;
        });
}

function getSentenceCount() {
    clearAllResponses();
    const content = prompt('Enter Text Content:');
    document.getElementById('getSentenceCountRequest').innerText = 'POST: ' + baseUrl + '/texts/sentence-count\n' + content;
    fetch(`${baseUrl}/texts/sentence-count`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('getSentenceCountResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('getSentenceCountResponse').innerText = 'Error: ' + error.message;
        });
}

function getParagraphCount() {
    clearAllResponses();
    const content = prompt('Enter Text Content:');
    document.getElementById('getParagraphCountRequest').innerText = 'POST: ' + baseUrl + '/texts/paragraph-count\n' + content;
    fetch(`${baseUrl}/texts/paragraph-count`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('getParagraphCountResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('getParagraphCountResponse').innerText = 'Error: ' + error.message;
        });
}

function getLongestWords() {
    clearAllResponses();
    const content = prompt('Enter Text Content:');
    document.getElementById('getLongestWordsRequest').innerText = 'POST: ' + baseUrl + '/texts/longest-words\n' + content;
    fetch(`${baseUrl}/texts/longest-words`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('getLongestWordsResponse').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('getLongestWordsResponse').innerText = 'Error: ' + error.message;
        });
}
