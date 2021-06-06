import Cookie from 'js-cookie';

export function getCookie() {
  return {
    id: Cookie.get('id'),
    name: Cookie.get('name'),
    card: Cookie.get('card'),
    phone: Cookie.get('phone'),
    loginId: Cookie.get('loginId'),
    loginPwd: Cookie.get('loginPwd'),
    role: Cookie.get('role'),
  };
}

export function setCookie(userInfo) {
  const array = Object.entries(userInfo);
  for (let i = 0; i < array.length; i += 1) {
    Cookie.set(array[i][0], array[i][1]);
  }
  return getCookie();
}

export function removeCookie() {
  Cookie.remove('id');
  Cookie.remove('name');
  Cookie.remove('card');
  Cookie.remove('phone');
  Cookie.remove('loginId');
  Cookie.remove('loginPwd');
  Cookie.remove('role');
}
