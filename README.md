# 🗂️ Custom HashMap in JavaScript

This project implements a HashMap (Hash Table) data structure in pure JavaScript.
It supports insertion, lookup, deletion, resizing, and utility methods such as retrieving keys, values, and entries.

## 🚀 Features

- Hashing function with a prime multiplier (31) for better distribution.

- Separate chaining collision handling (each bucket stores multiple key-value pairs).

- Automatic resizing when load factor exceeds 0.7.

- Supports core HashMap operations:

* set(key, value)

* get(key)

* has(key)

* remove(key)

* keys()

* values()

* entries()

* clear()

* length()

## 📊 Complexity

- set / get / has / remove → Average: O(1), Worst-case: O(n) (when all keys collide into one bucket).

- resize → O(n) (rehashing all elements).

- keys / values / entries → O(n).
