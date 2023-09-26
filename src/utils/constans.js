export const URL = {
  beatfilmMovies: 'https://api.nomoreparties.co',
  localApi: 'https://api.angelikayang.nomoreparties.co',
  //localApi: 'http://localhost:3001',
};

export const PAGE_COL = {
  desktop: {
    width: 1024,
    cards: {
      total: 16,
      load: 4,
    },
  },
  tablet: {
    width: 501,
    cards: {
      total: 8,
      load: 2,
    },
  },
  mobile: {
    width: 500,
    cards: {
      total: 5,
      load: 2,
    },
  },
};

export const MOVIE_DURATION = 40;
export const ERROR_TEXT = {
  incorrectEmail: 'Неверный формат e-mail',
  incorrectName: 'Неверный формат имени',
  enterKeyword: 'Необходимо ввести ключевое слово',
  catchError: 'Что-то пошло не так...',
  notFound: 'Ничего не найдено',
  anotherError: 'Во время запроса произошла ошибка.',
};
export const NAME_REGEXP = "^[A-Za-zА-Яа-яЁё\\-\\s]+$";
