const format = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
}).format;

export const dateFormatter = {
  format: (date: string | Date | number) => {
    if (typeof date === "string") return format(new Date(date));
    return format(date);
  },
};
