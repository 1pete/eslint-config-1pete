const fn = () => null

let ignorePreferConst = 0
fn(ignorePreferConst)

async function awaitInLoop() {
  let i = 10

  while (i > 0) {
    await Promise.resolve()
    i -= 1
  }
}
awaitInLoop()

const implicitArrowLineBreak = () =>
  10

fn(implicitArrowLineBreak)
