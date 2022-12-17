struct Block {
    // block data, such as transactions and timestamp
    data: Vec<u8>,
    // previous block's hash
    prev_hash: Vec<u8>,
    // current block's hash
    hash: Vec<u8>,
    // stake of the user who created the block
    stake: u64,
}

struct Blockchain {
    // vector of blocks
    blocks: Vec<Block>,
}

impl Blockchain {
    fn new() -> Self {
        // create a new, empty blockchain
        Blockchain { blocks: Vec::new() }
    }

    fn add_block(&mut self, block: Block) {
        // add a new block to the blockchain
        self.blocks.push(block);
    }

    fn validate_block(&self, block: &Block) -> bool {
        // validate the block by checking its hash and the previous block's hash
        let prev_block = &self.blocks[self.blocks.len() - 1];
        block.prev_hash == prev_block.hash
    }

    fn select_validator(&self) -> u64 {
        // select the validator for the next block based on their stake
        let total_stake: u64 = self.blocks.iter().map(|b| b.stake).sum();
        let mut rng = rand::thread_rng();
        let selection: u64 = rng.gen_range(0, total_stake);
        let mut cum_stake: u64 = 0;
        for block in &self.blocks {
            cum_stake += block.stake;
            if cum_stake > selection {
                return block.stake;
            }
        }
        0
    }
}
