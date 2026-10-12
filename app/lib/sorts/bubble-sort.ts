/**
 * バブルソートを実行します。
 *
 * @param array ソート対象の配列
 * @returns ソート後の配列
 */
export function bubbleSort(array: number[]): number[] {
  // 最大で配列の[要素数-1]周の比較を行う
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false;

    // i周目で後ろからi番目の要素が確定する
    // そのため、[0]から[要素数-i-1]番目までの比較を行う
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] <= array[j + 1]) {
        continue;
      }

      // 前後を比較し、前の要素の方が大きければ入替
      const swappingElement = array[j];
      array[j] = array[j + 1];
      array[j + 1] = swappingElement;
      swapped = true;
    }

    // 入替がなかった場合、ソートが完了しているため、比較を終了する
    if (!swapped) {
      break;
    }
  }

  return array;
}
