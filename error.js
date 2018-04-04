// Russian texts
let ru = {
  confirm: {
    password: 'Пароль и подтверждение не совпадает'
  },
  field: {
    uint: 'Значение должно быть больше или равно 0',
    uint_max_min: 'Значение должно быть от {{min}} до {{max}}'
  },
  required: {
    field: 'Поле обязательное',
    login: 'Логин обязателен',
    email: 'Email обязателен',
    password: 'Пароль обязателен',
    all_params: 'Требуется заполнить все параметры'
  },
  number: {
    to_10000: 'Значение должно быть от {{min}} до 10000'
  },
  minimum: {
    password: 'Минимальная длина 6 символов'
  }
}

// English texts
let en = {
  confirm: {
    password: 'Password and confirmation are not equal'
  },
  field: {
    uint: 'Value must be greater or equal 0',
    uint_max_min: 'Value must be gte {{min}} and lte {{max}}'
  },
  required: {
    field: 'Field is required',
    login: 'Field is required',
    email: 'Email is required',
    password: 'Password is required',
    all_params: 'Should fill all parameters'
  },
  number: {
    to_10000: 'Value must be from {{min}} till 10000'
  },
  minimum: {
    password: 'Minimum length 6 chars'
  }
}

// Chinese (simplify) texts
let cn = {
  confirm: {
    password: 'Password and confirmation are not equal'
  },
  field: {
    uint: 'Value must be greater or equal 0',
    uint_max_min: 'Value must be gte {{min}} and lte {{max}}'
  },
  required: {
    field: 'Field is required',
    login: 'Field is required',
    email: 'Email is required',
    password: 'Password is required',
    all_params: 'Should fill all parameters'
  },
  number: {
    to_10000: 'Value must be from {{min}} till 10000'
  },
  minimum: {
    password: 'Minimum length 6 chars'
  }
}

export {en, ru, cn}
