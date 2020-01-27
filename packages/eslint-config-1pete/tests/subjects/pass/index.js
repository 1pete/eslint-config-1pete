const fn = () => null

// prefer-const
let ignorePreferConst = 0
fn(ignorePreferConst)

// no-await-in-loop
async function awaitInLoop() {
  let i = 10

  while (i > 0) {
    await Promise.resolve()
    i -= 1
  }
}
awaitInLoop()

// implicit-arrow-linebreak
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

// class-methods-use-this
export class NoThis {
  noThis() {

  }
}

// arrow-body-style
fn(() => {
  return 10
})

export default fn
