
import './style.css'; // Asegúrate de que este sea tu archivo donde importas Tailwind
import mqtt from 'mqtt';

// Elementos del DOM
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');
const consoleOutput = document.getElementById('console-output');

// Configuración de conexión (Usando la IP que vimos en tu consola de ESP32)
const brokerUrl = 'ws://172.20.10.4:9001';
const topic = 'almacen/ordenes';

// Conectar al broker MQTT
const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  statusDot.classList.replace('bg-red-500', 'bg-green-500');
  statusText.textContent = 'Conectado';
  console.log('Conectado exitosamente al broker MQTT de la Raspberry Pi');
});

client.on('error', (err) => {
  statusDot.classList.replace('bg-green-500', 'bg-red-500');
  statusText.textContent = 'Error de conexión';
  console.error('Error MQTT: ', err);
});

// Función para enviar comandos
function mandarOrden(zona) {
  if (client.connected) {
    client.publish(topic, zona);
    consoleOutput.textContent = `Comando [ ${zona} ] enviado correctamente.`;
    
    // Pequeña animación de feedback visual
    consoleOutput.classList.add('bg-blue-50', 'text-blue-700');
    setTimeout(() => {
      consoleOutput.classList.remove('bg-blue-50', 'text-blue-700');
    }, 300);
  } else {
    consoleOutput.textContent = 'Error: Sistema desconectado.';
  }
}

// Asignar eventos a los botones
document.getElementById('btn-A').addEventListener('click', () => mandarOrden('A'));
document.getElementById('btn-B').addEventListener('click', () => mandarOrden('B'));
document.getElementById('btn-C').addEventListener('click', () => mandarOrden('C'));
document.getElementById('btn-R').addEventListener('click', () => mandarOrden('R'));