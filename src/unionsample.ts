const returnValueFunc = <T>(value: T) => {
  return value
}

const personName = returnValueFunc<string>('tintins')
const personAge = returnValueFunc<number>(20)