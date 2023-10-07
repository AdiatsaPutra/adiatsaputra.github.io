function shortenText(inputText: string, length: number): string {
  if (inputText.length <= length) {
    return inputText;
  }

  const truncatedText = inputText.slice(0, length - 3);
  const shortenedText = truncatedText + "...";

  return shortenedText;
}

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      formatText: (msg: string) => {
        const text = shortenText(msg, 20);
        return text;
      },
    },
  };
});
