const cn = (...args: (string | undefined | null | boolean)[]): string =>
  args.filter((item) => !!item && typeof item === "string").join(" ");

export default cn;
