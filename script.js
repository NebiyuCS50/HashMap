class HashMap {
  constructor() {
    this.capacity = 8;
    this.loadFactor;
    this.size;
    this.buckets = Array(this.capacity)
      .fill(null)
      .map(() => []);
  }
  hash(key) {
    let hashCode = 0;
    let prime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * prime + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.size++;
    this.loadFactor = this.size / this.capacity;
    if (this.loadFactor > 0.7) {
      this.resize();
    }
  }
  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array(this.capacity)
      .fill(null)
      .map(() => []);
    this.size = 0;
    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (const [k, v] of bucket) {
      if (k === key) {
        return v;
      }
    }
    return undefined;
  }
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (const [k, v] of bucket) {
      if (k === key) {
        return true;
      }
    }
    return false;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        this.loadFactor = this.size / this.capacity;
        return true;
      }
    }
    return false;
  }
  length() {
    return this.size;
  }
  clear() {
    this.capacity = 8;
    this.size = 0;
    this.loadFactor = 0;
    this.buckets = Array(this.capacity)
      .fill(null)
      .map(() => []);
  }
  keys() {
    const keysArray = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        keysArray.push(key);
      }
    }
    return keysArray;
  }
  values() {
    const valuesArray = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        valuesArray.push(value);
      }
    }
    return valuesArray;
  }
  entries() {
    const entriesArray = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        entriesArray.push([key, value]);
      }
    }
    return entriesArray;
  }
}
