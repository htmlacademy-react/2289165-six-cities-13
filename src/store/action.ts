import {createAction} from '@reduxjs/toolkit';
import { SortingType } from '../const';

export const changeCity = createAction('app/changeCity', (city: string) => ({
  payload: city
}));

export const getOffers = createAction('app/getOffers');

export const changeSortingType = createAction('app/changeSortingType', (sortingType: SortingType) => ({
  payload: sortingType
}));


// На данном этапе нам потребуется несколько действий:
// изменение города и
// заполнение списка предложений по аренде.
// Действие для заполнения списка предложений должно поместить
// в хранилище все предложения по аренде. Пока используем тестовые данные.
