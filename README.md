# Proof-of-Stake (PoS)

Proof-of-Stake (PoS) is a type of consensus algorithm used by some blockchain networks to achieve distributed consensus. In PoS, the creator of a new block is chosen in a deterministic way, depending on their stake in the network. Stake refers to the amount of cryptocurrency that a user holds, or the number of coins that they have "staked" by holding them in a special wallet that is used for staking.

In a PoS system, the probability of a user being chosen to create a new block is proportional to their stake in the network. For example, if a user holds 10% of the total stake in the network, they have a 10% chance of being chosen to create the next block.

One of the main benefits of PoS is that it requires much less energy to maintain the network compared to Proof-of-Work (PoW), which is the consensus algorithm used by networks like Bitcoin. In PoW, miners compete to solve complex mathematical problems in order to create new blocks and receive a reward. This process consumes a significant amount of energy, as miners must use specialized hardware to solve the problems.

In contrast, PoS does not require miners to solve complex mathematical problems in order to create new blocks. This makes it more energy-efficient and less resource-intensive compared to PoW.

There are different variations of PoS, including Delegated Proof-of-Stake (DPoS), where users can delegate their stake to other users who act as "validators" and create new blocks on their behalf.

Overall, Proof-of-Stake is a type of consensus algorithm that is used to secure and validate transactions on a blockchain network, and it offers an alternative to Proof-of-Work that is more energy-efficient and less resource-intensive.

## Implementation

This implementation includes a Block struct that represents a single block in the blockchain, with fields for the block data, the previous block's hash, the current block's hash, and the stake of the user who created the block.

It also includes a Blockchain struct that represents the entire blockchain, with a vector of blocks. The Blockchain struct includes methods for adding a new block to the chain, validating a block, and selecting a validator for the next block based on their stake.

### Sequence diagram

![image](https://user-images.githubusercontent.com/117555665/208231901-8adcb743-745b-434a-83ab-8138b24eacd5.png)

#### Steps

The user sends a request to add a new block to the blockchain.
The blockchain selects a validator for the new block based on their stake in the network.
The blockchain validates the new block by checking its hash and the previous block's hash.
If the block is valid, it is added to the chain.
The blockchain confirms to the user that the block has been added.
