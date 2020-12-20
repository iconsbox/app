export function chooseWeighted(items, chances) {
  let sum = chances.reduce((acc, el) => acc + el, 0);
  let acc = 0;
  chances = chances.map(el => (acc = el + acc));
  let rand = Math.random() * sum;
  return items[chances.filter(el => el <= rand).length];
}


// @ts-ignore
export const textFetcher = (...args) => fetch(...args).then(res => res.text());

// @ts-ignore
export const jsonFetcher = (...args) => fetch(...args).then(res => res.json());

/**
 * Pick a bunch of random items
 */
export const pickIcons = (array: string[], length: number): string[] => {
  return array.map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0, length);
};

/**
 * Make a path of svg file
 */
export const makeFilePath = function(pack: string, name: string): string {
  return `https://raw.githubusercontent.com/snappmarket/IconBox/master/packages/${pack}/src/${name}/index.svg`;
};

/**
 * Random array index
 */
export const chooseRandom = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Paginate over array items
 */
export const paginate = (array: string[], page_size: number, page_number: number): string[] => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};