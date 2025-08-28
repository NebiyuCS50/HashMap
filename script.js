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
}
