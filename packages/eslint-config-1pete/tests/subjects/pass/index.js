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

const listForIn = [1, 2, 3]
for (let x of listForIn) {
  fn(x)
}

function fnUnusedArgs(a, b, _c) {
  fn(a)
  fn(b)
}
fnUnusedArgs()

const unusedRest = { a: 10, b: 20, c: 30 }
const { a, ...args } = unusedRest
fn(args)

export class NoThis {
  noThis() {

  }
}

export default fn
