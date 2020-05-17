class SnapshotArray {
  constructor(l) {
    this.snapshots = [];
    this.snap();
  }

  set(index, val) {
    this.snapshots[this.snapshots.length - 1].set(index, val);
  }

  snap() {
    let len = this.snapshots.length - 1;
    this.snapshots.push(new Map());
    return l;
  }

  get(index, snapId) {
    for (let i = snapId; i >= 0; i--) {
      if (this.snapshots[i].has(index)) return this.snapshots[i].get(index);
    }
    return null;
  }
}
