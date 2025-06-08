
const miner1 = { name: "Alice", power: Math.floor(Math.random() * 100) };
const miner2 = { name: "Bob", power: Math.floor(Math.random() * 100) };
const powWinner = miner1.power > miner2.power ? miner1 : miner2;
console.log(`PoW selected validator: ${powWinner.name} with power ${powWinner.power}`);
console.log("📌 PoW favors higher computational power.\n");


const staker1 = { name: "Carol", stake: Math.floor(Math.random() * 1000) };
const staker2 = { name: "Dave", stake: Math.floor(Math.random() * 1000) };
const posWinner = staker1.stake > staker2.stake ? staker1 : staker2;
console.log(`PoS selected validator: ${posWinner.name} with stake ${posWinner.stake}`);
console.log("📌 PoS favors higher token holdings.\n");

const delegates = ["Eve", "Frank", "Grace"];
const votes = {
  Eve: Math.floor(Math.random() * 10),
  Frank: Math.floor(Math.random() * 10),
  Grace: Math.floor(Math.random() * 10),
};
const dposWinner = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
console.log(`DPoS selected validator: ${dposWinner} with ${votes[dposWinner]} votes`);
console.log("📌 DPoS selects based on community votes.\n");
