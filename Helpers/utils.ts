import { SYNONYM_WORDS } from "./constants";
/* eslint-disable @typescript-eslint/ban-ts-comment */

export function chooseWeighted(items: any[], chances: number[]) {
  const sum = chances.reduce((acc: number, el: number) => acc + el, 0);
  let acc = 0;
  chances = chances.map((el: number) => (acc = el + acc));
  const rand = Math.random() * sum;
  return items[chances.filter((el: number) => el <= rand).length];
}

export const textFetcher = (...args: any) =>
  // @ts-ignore
  fetch(...args).then((res) => res.text());

export const jsonFetcher = (...args: any) =>
  // @ts-ignore
  fetch(...args).then((res) => res.json());

/**
 * Pick a bunch of random items
 */
export const pickIcons = (array: string[], length: number): string[] => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0, length);
};

/**
 * Make a path of svg file
 */
export const makeFilePath = function (pack: string, name: string): string {
  return `https://raw.githubusercontent.com/snappmarket/IconBox/master/packages/${pack}/src/${name}/index.svg`;
};

/**
 * Random array index
 */
export const chooseRandom = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Paginate over array items
 */
export const paginate = (
  array: any[],
  page_size: number,
  page_number: number
): any[] => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

export const getSynonyms = (word: string) => {
  let words: string[] = [];
  SYNONYM_WORDS.forEach((s) => {
    if (s.some((r) => r.startsWith(word))) {
      words = words.concat(s);
    }
  });

  return words;
};

export const getMultiSynonyms = (wordsArray: string[]) => {
  let words: string[] = [];
  wordsArray.forEach((word) => {
    words = words.concat(getSynonyms(word));
  });

  return words;
};
