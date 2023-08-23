import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('app/changeCity', (city: string) => ({
  payload: city
}));

export const getOffers = createAction('app/getOffers');


// На данном этапе нам потребуется несколько действий:
// изменение города и
// заполнение списка предложений по аренде.
// Действие для заполнения списка предложений должно поместить
// в хранилище все предложения по аренде. Пока используем тестовые данные.
