import test from 'node:test'
import assert from 'node:assert/strict'
import { handleSectionNavigation } from '../src/utils/navigation.js'

function fixture(overrides = {}) {
  const calls = []
  const section = {
    scrollIntoView: (options) => calls.push(['scroll', options]),
    focus: (options) => calls.push(['focus', options]),
  }
  const event = {
    button: 0,
    target: { closest: () => ({ getAttribute: () => '#tentang' }) },
    currentTarget: {
      ownerDocument: {
        getElementById: (id) => (id === 'tentang' ? section : null),
      },
    },
    preventDefault: () => calls.push(['prevent']),
    ...overrides,
  }
  return { event, calls }
}

test('internal navigation prevents the hash update, scrolls and transfers focus', () => {
  const { event, calls } = fixture()
  handleSectionNavigation(event)
  assert.deepEqual(calls, [
    ['prevent'],
    ['scroll', { block: 'start' }],
    ['focus', { preventScroll: true }],
  ])
})

test('modified clicks, missing targets and ordinary controls retain native behavior', () => {
  for (const overrides of [
    { ctrlKey: true },
    { metaKey: true },
    { shiftKey: true },
    { altKey: true },
    { button: 1 },
    { defaultPrevented: true },
    { target: { closest: () => null } },
    { currentTarget: { ownerDocument: { getElementById: () => null } } },
  ]) {
    const { event, calls } = fixture(overrides)
    handleSectionNavigation(event)
    assert.deepEqual(calls, [])
  }
})
