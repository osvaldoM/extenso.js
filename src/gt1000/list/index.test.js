import test from 'ava'
import is from 'is'
import obj from './'

test('Deve ser array de strings', t => {
  t.true(is.array(obj))
  obj.forEach(item => {
    t.true(is.string(item))
  })
})

test('Devem ser strings sem espaços', t => {
  obj.forEach(item => {
    t.is(item.replace(/\s/g), item)
  })
})

test('Devem terminar com "-ilhões"', t => {
  obj.forEach(item => {
    // Com exceção do primeiro item que é "mil".
    t.true(/(^mil$|ilhões$)/.test(item))
  })
})