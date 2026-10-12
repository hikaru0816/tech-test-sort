/**
 * マージソートを実行します。
 *
 * @param array ソート対象の配列
 * @returns ソート後の配列
 */
export function mergeSort(array: number[]): number[] {
  // ソート対象の配列の要素数が1つの場合には、そのまま返す
  if (array.length <= 1) {
    return array;
  }

  // STEP1: 分割
  const [first, second] = divideArray(array);

  // STEP2: 再帰的に分割・マージ
  const sortedFirst = mergeSort(first);
  const sortedSecond = mergeSort(second);

  // STEP3: マージし、返す
  return mergeArray(sortedFirst, sortedSecond);
}

/**
 * 配列を2分割します。
 *
 * @param array 分割対象の配列
 * @returns 分割後の配列
 */
function divideArray(array: number[]): [number[], number[]] {
  const dividingPoint = Math.ceil(array.length / 2);
  // 分割前の配列の要素数が奇数の場合、最初の方が多くなるように分割
  const firstArray = array.slice(0, dividingPoint);
  const secondArray = array.slice(dividingPoint);
  return [firstArray, secondArray];
}

/**
 * 配列をマージします。
 *
 * @param firstArray 要素が昇順に並んだマージ対象の配列1
 * @param secondArray 要素が昇順に並んだマージ対象の配列2
 * @returns マージ後の配列
 */
function mergeArray(firstArray: number[], secondArray: number[]): number[] {
  const mergedArray: number[] = [];
  let i = 0;
  let j = 0;

  // 各配列の要素が昇順に並んでいることを前提に、要素を比較し、小さい数値を格納
  while (i < firstArray.length && j < secondArray.length) {
    if (firstArray[i] <= secondArray[j]) {
      mergedArray.push(firstArray[i]);
      i++;
    } else {
      mergedArray.push(secondArray[j]);
      j++;
    }
  }

  // 残った配列をマージし、返す
  return [...mergedArray, ...firstArray.slice(i), ...secondArray.slice(j)];
}
