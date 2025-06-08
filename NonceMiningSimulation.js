class BlockWithMining extends Block {
  mineBlock(difficulty) {
    const prefix = Array(difficulty + 1).join("0");
    const startTime = Date.now();
    while (this.hash.substring(0, difficulty) !== prefix) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    const endTime = Date.now();
    console.log(`✅ Block mined: ${this.hash}`);
    console.log(`🔁 Nonce attempts: ${this.nonce}`);
    console.log(`⏱️ Time taken: ${(endTime - startTime) / 1000}s`);
  }
}

const difficulty = 4;
const miningBlock = new BlockWithMining(4, new Date().toISOString(), { reward: 50 }, block3.hash);
miningBlock.mineBlock(difficulty);
