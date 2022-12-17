type Block struct {
	// block data, such as transactions and timestamp
	Data []byte
	// previous block's hash
	PrevHash []byte
	// current block's hash
	Hash []byte
	// stake of the user who created the block
	Stake uint64
}

type Blockchain struct {
	// slice of blocks
	Blocks []*Block
}

func NewBlockchain() *Blockchain {
	// create a new, empty blockchain
	return &Blockchain{Blocks: []*Block{}}
}

func (bc *Blockchain) AddBlock(block *Block) {
	// add a new block to the blockchain
	bc.Blocks = append(bc.Blocks, block)
}

func (bc *Blockchain) ValidateBlock(block *Block) bool {
	// validate the block by checking its hash and the previous block's hash
	prevBlock := bc.Blocks[len(bc.Blocks)-1]
	return bytes.Equal(block.PrevHash, prevBlock.Hash)
}

func (bc *Blockchain) SelectValidator() uint64 {
	// select the validator for the next block based on their stake
	var totalStake uint64
	for _, block := range bc.Blocks {
		totalStake += block.Stake
	}
	selection := rand.Intn(int(totalStake))
	var cumStake uint64
	for _, block := range bc.Blocks {
		cumStake += block.Stake
		if cumStake > uint64(selection) {
			return block.Stake
		}
	}
	return 0
}
