export function isValidEmail(email: string): boolean {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@([0-9a-zA-Z-]+)\.([a-zA-Z]{2,3})(\.[a-zA-Z]{2})?$/;
  return emailRegex.test(email);
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8;
}
