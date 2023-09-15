export function classNames(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function selectFormat(array: string[]) {
  return array.map((item) => ({ label: item, value: item }));
}
