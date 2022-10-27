const bodyLogin = {
  email: "testando@uol.com",
  password: "testedeerror"
}

const bodyLoginError = {
  email: "users@user.com",
  password: "1234567"
}

const mockUser = {
  id: 1,
  email: "users@user.com",
  password: "1234567",
  username: 'Usuario1',
  role: 'user'
}

const token = {
  token: "token"
}

export {
  bodyLogin,
  mockUser,
  token,
  bodyLoginError,
}