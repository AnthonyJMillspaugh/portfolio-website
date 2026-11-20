import { useMemo } from 'react'

function makeBinary(totalChars) {
  let out = ''
  while (out.length < totalChars) {
    const len = 1 + Math.floor(Math.random() * 7)
    let word = ''
    for (let i = 0; i < len; i++) word += Math.random() < 0.5 ? '0' : '1'
    const gap = ' '.repeat(1 + Math.floor(Math.random() * 3))
    out += word + gap
  }
  return out
}

export default function BinaryBackground() {
  const text = useMemo(() => makeBinary(30000), [])
  return <div className="binary-bg" aria-hidden="true">{text}</div>
}