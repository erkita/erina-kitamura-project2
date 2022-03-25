import React from 'react'

export default function Key({ keyLetter, largeKey }) {
  return (
    <div className={largeKey ? "key large" : "key"}>{keyLetter}</div>
  )
}
