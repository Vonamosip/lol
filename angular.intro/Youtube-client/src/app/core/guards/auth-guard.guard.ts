
import type { CanActivateFn } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  try {
    const storedData = localStorage.getItem('loginP');
    if (storedData) {
      const dataArray = JSON.parse(storedData);
      if (Array.isArray(dataArray) && dataArray.length > 0) {
        return dataArray[dataArray.length - 1].isLogged === true; // Убедитесь, что это boolean
      }
    }
  } catch (error) {
    console.error('Ошибка при проверке авторизации:', error);
  }
  return false;
};
