let currentBill = null;
let inventory = {
    'चाय': { price: 20, stock: 50, unit: 'packet' },
    'चीनी': { price: 45, stock: 20, unit: 'kg' },
    'बिस्कुट': { price: 15, stock: 30, unit: 'packet' }
};
function sendMessage(){
    const input = document.getElementById("messageInput");
    
    const message = input.value.trim();
    
    if (!message) return;

    addMessage(message, "user");

    input.value = '';

    setTimeout(() => {
        processMessage(message);
    },1000);
}

function addMessage(message, sender){
    const chatContainer = document.getElementById('chatContainer');

    const messageDiv = document.createELement('div');

    messageDiv.className = 'message ${sender}-message';

    messageDiv.innerHTML = message;

    chatContainer.appendChild(messageDiv);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function processMessage(message) {
    const lowerMessage = message.toLowerCase();

        if (lowerMessage.includes('बिल') || lowerMessage.includes('bill')) {
        addMessage('नया बिल बना रहा हूं। ग्राहक का नाम बताएं।', 'bot');
    } else if (lowerMessage.includes('स्टॉक') || lowerMessage.includes('stock')) {
        showStock();
    } else {
        addMessage('मैं समझ नहीं पाया। "बिल बनाओ" या "स्टॉक देखो" कहें।', 'bot');
    }
}

function showStock(){
    let stockMsg = '📦 आपका स्टॉक:<br><br>';

    for (let item in inventory) {
        const data = inventory[item];
        stockMsg += '${item}: ${data.stock} ${data.unit} (₹${data.price}) <br>';
    }

    addMessage(stockMsg, 'bot');
}

window.onload = function (){
    console.log('App loaded Successfully!');

    const input = this.document.getElementById('messageInput');
    input.addEventListener('keypress', function(event){
        if (event.key == 'Enter'){
            sendMessage();
        }
    });
};

let recognition;
let isRecording = false;

function initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'hi-IN';

        recognition.onresult = function(event){
            const result = event.results[0][0].transcript;
        
        document.getElementById('messageInput').value = result;
        stopRecording();
        setTimeout(() => sendMessage(), 500);
    };
    
    recognition.onend = function(){
        stopRecording();
    };
    }else{
        console.log('Speech recongnition not supported');
    }
}

function startRecording(){
    if (recognition){
        isRecording = true;
        recognition.start();
        console.log('Start recording..');
    }
}

function stopRecording(){
    isRecording = false;
    if (recognition){
        recognition.stop();
    }
    console.log('Stopped recording');
}

function toggleVoice(){
    if(!isRecording){
        startRecording();
    }else{
        stopRecording();
    }
}

