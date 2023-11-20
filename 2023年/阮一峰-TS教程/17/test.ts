

function simpleDecorator(
  value: any,
  context: any
) {
  console.log('hi')
  return value
}

@simpleDecorator
class A {}



