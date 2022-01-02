export function isNull<NotNull>(input: null | NotNull): input is null {
  if (input === null) return true;
  return false;
}
export function isNotNull<NotNull>(input: NotNull | null): input is NotNull {
  return !isNull(input);
}
