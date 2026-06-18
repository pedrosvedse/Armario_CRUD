# Armários Mobile

## Dependências
- Node.js 18+
- Expo CLI
- Expo Go (dispositivo físico) ou emulador

## Instalação
cd mobile
npm install

## Configuração
Em `services/api.js`, troque o IP pelo IP local da sua máquina:
baseURL: 'http://SEU_IP:3000'

Para descobrir seu IP:
- Windows: ipconfig
- Linux/Mac: ifconfig

## Execução
npm start

Escaneie o QR code com o Expo Go.

## Tecnologias
- React Native
- Expo
- Axios
- React Navigation