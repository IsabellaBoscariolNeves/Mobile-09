import { Alert } from 'react-native';

// Mantido para compatibilidade com o App.js
export const isExpoGo = true;

// Alertas em tela não exigem permissão de sistema
export async function registerForLocalNotificationsAsync() {
  return true;
}

// Dispara o aviso imediatamente na tela
export async function triggerLocalNotification(title, body) {
  try {
    Alert.alert(
      `🔔 ${title}`,
      body,
      [{ text: 'OK', style: 'default' }],
      { cancelable: true }
    );
  } catch (error) {
    console.error('Erro ao exibir aviso:', error);
  }
}