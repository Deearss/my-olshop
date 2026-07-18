export type SupportedLangs =
  | "en-US"
  | "id-ID"
  | "ja-JP"
  | "fr-FR"
  | "de-DE"
  | "es-ES"
  | "it-IT"
  | "zh-CN"
  | "ko-KR"
  | "ru-RU"
  | "pt-BR"
  | "en-GB";

export function toCurrency(amount: number, lang: SupportedLangs): string {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: getCurrencyCode(lang),
  };

  if (lang === "id-ID") {
    options.minimumFractionDigits = 0;
    options.maximumFractionDigits = 0;
  }

  return new Intl.NumberFormat(lang, options).format(amount);
}

function getCurrencyCode(lang: SupportedLangs): string {
  const currencyMap: { [key in SupportedLangs]: string } = {
    "en-US": "USD",
    "id-ID": "IDR",
    "ja-JP": "JPY",
    "fr-FR": "EUR",
    "de-DE": "EUR",
    "es-ES": "EUR",
    "it-IT": "EUR",
    "zh-CN": "CNY",
    "ko-KR": "KRW",
    "ru-RU": "RUB",
    "pt-BR": "BRL",
    "en-GB": "GBP",
  };
  return currencyMap[lang];
}
