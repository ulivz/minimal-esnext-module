export function sleep(t: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, t);
  });
}

export async function asyncFunc() {
  await sleep(100);
}
