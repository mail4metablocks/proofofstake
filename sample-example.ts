class Block {
  // block data, such as transactions and timestamp
  data: Uint8Array;
  // previous block's hash
  prevHash: Uint8Array;
  // current block's hash
  hash: Uint8Array;
  // stake of the user who created the block
  stake: number;

  constructor(data: Uint8Array, prevHash: Uint8Array, hash: Uint8Array, stake: number) {
    this.data = data;
    this.prevHash = prevHash;
    this.hash = hash;
    this.stake = stake;
  }
}

class Blockchain {
  // array of blocks
  blocks: Block[];

  constructor() {
    // create a new, empty blockchain
    this.blocks = [];
  }

  addBlock(block: Block): void {
    // add a new block to the blockchain
    this.blocks.push(block);
  }

  validateBlock(block: Block): boolean {
    // validate the block by checking its hash and the previous block's hash
    const prevBlock = this.blocks[this.blocks.length - 1];
    return block.prevHash.every((value, index) => value === prevBlock.hash[index]);
  }

  selectValidator(): number {
    // select the validator for the next block based on their stake
    const totalStake = this.blocks.reduce((acc, block) => acc + block.stake, 0);
    const selection = Math.floor(Math.random() * totalStake);
    let cumStake = 0;
    for (const block of this.blocks) {
      cumStake += block.stake;
      if (cumStake > selection) {
        return block.stake;
      }
    }
    return 0;
  }
}
