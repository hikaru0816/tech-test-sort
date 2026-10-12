import { useState } from "react";
import { mergeSort } from "~/lib/sorts/merge-sort";
import { bubbleSort } from "~/lib/sorts/bubble-sort";

export default function Home() {
  const [count, setCount] = useState<number>(10);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [bubbleSortedNumbers, setBubbleSortedNumbers] = useState<number[]>([]);
  const [mergeSortedNumbers, setMergeSortedNumbers] = useState<number[]>([]);

  return (
    <>
      <h1>技術課題 ソート</h1>
      <div>
        <h2>実装後の感想</h2>
        <div>
          <h3>バブルソート</h3>
          <p>アルゴリズムが非常にシンプルであるため、理解しやすかったです。</p>
          <p>そのため、短時間で実装することができました。</p>
        </div>
        <div>
          <h3>マージソート</h3>
          <p>
            バブルソートと比較すると、アルゴリズムが複雑で、実装に時間がかかりました。
          </p>
          <p>
            再帰的に分割・マージさせるように実装でき、スマートに実装できたと感じています。
          </p>
        </div>
      </div>
      <div>
        <h2>ソートする数字群</h2>
        <div>
          <label htmlFor="count">生成する数字群の数字の個数：</label>
          <input
            id="count"
            type="number"
            min={1}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </div>
        <button
          onClick={() => {
            const generatedNumbers = Array.from({ length: count }, () =>
              Math.floor(Math.random() * 100),
            );
            setNumbers(generatedNumbers);
            setBubbleSortedNumbers([]);
            setMergeSortedNumbers([]);
          }}
        >
          ソートする数字群を生成（{count}個の0~99の乱数を生成）
        </button>
        <p>{numbers.join(", ")}</p>
      </div>
      <div>
        <h2>バブルソート</h2>
        <button
          onClick={() => {
            setBubbleSortedNumbers(bubbleSort([...numbers]));
          }}
        >
          バブルソート実行
        </button>
        <p>{bubbleSortedNumbers.join(", ")}</p>
      </div>
      <div>
        <h2>マージソート</h2>
        <button
          onClick={() => {
            setMergeSortedNumbers(mergeSort([...numbers]));
          }}
        >
          マージソート実行
        </button>
        <p>{mergeSortedNumbers.join(", ")}</p>
      </div>
    </>
  );
}
