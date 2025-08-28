class HashMap {
  constructor() {
    this.capacity = 8;
    this.loadFactor;
    this.size;
    this.buckets;
  }
  hash(key) {
    let hashCode = 0;
    let prime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * prime + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }
}
