import { mintFlow, executeScript, sendTransaction, deployContractByName } from "@onflow/flow-js-testing";
import { getTopJockAdminAddress } from "./common";

export const types = {
	fishbowl: 1,
	fishhat: 2,
	milkshake: 3,
	tuktuk: 4,
	skateboard: 5
};

export const rarities = {
	blue: 1,
	green: 2,
	purple: 3,
	gold: 4
};

/*
 * Deploys NonFungibleToken and TopJockNFT contracts to TopJockAdmin.
 * @throws Will throw an error if transaction is reverted.
 * @returns {Promise<[{*} txResult, {error} error]>}
 * */
export const deployTopJockNFT = async () => {
	const TopJockAdmin = await getTopJockAdminAddress();
	await mintFlow(TopJockAdmin, "10.0");

	await deployContractByName({ to: TopJockAdmin, name: "NonFungibleToken" });
	await deployContractByName({ to: TopJockAdmin, name: "MetadataViews" });
	return deployContractByName({ to: TopJockAdmin, name: "TopJockNFT" });
};

/*
 * Setups TopJockNFT collection on account and exposes public capability.
 * @param {string} account - account address
 * @returns {Promise<[{*} txResult, {error} error]>}
 * */
export const setupTopJockNFTOnAccount = async (account) => {
	const name = "topjocknft/setup_account";
	const signers = [account];

	return sendTransaction({ name, signers });
};

/*
 * Returns TopJockNFT supply.
 * @throws Will throw an error if execution will be halted
 * @returns {UInt64} - number of NFT minted so far
 * */
export const getTopJockNFTSupply = async () => {
	const name = "topjocknft/get_top_jock_nft_supply";

	return executeScript({ name });
};

/*
 * Mints TopJockNFT of a specific **itemType** and sends it to **recipient**.
 * @param {UInt64} itemType - type of NFT to mint
 * @param {string} recipient - recipient account address
 * @returns {Promise<[{*} result, {error} error]>}
 * */
export const mintTopJockNFT = async (recipient, itemType, itemRarity) => {
	const TopJockAdmin = await getTopJockAdminAddress();

	const name = "topjocknft/mint_top_jock_nft";
	const args = [recipient, itemType, itemRarity];
	const signers = [TopJockAdmin];

	return sendTransaction({ name, args, signers });
};

/*
 * Transfers TopJockNFT NFT with id equal **itemId** from **sender** account to **recipient**.
 * @param {string} sender - sender address
 * @param {string} recipient - recipient address
 * @param {UInt64} itemId - id of the item to transfer
 * @throws Will throw an error if execution will be halted
 * @returns {Promise<*>}
 * */
export const transferTopJockNFT = async (sender, recipient, itemId) => {
	const name = "topjocknft/transfer_top_jock_nft";
	const args = [recipient, itemId];
	const signers = [sender];

	return sendTransaction({ name, args, signers });
};

/*
 * Returns the TopJockNFT with the provided **id** from an account collection.
 * @param {string} account - account address
 * @param {UInt64} itemID - NFT id
 * @throws Will throw an error if execution will be halted
 * @returns {UInt64}
 * */
export const getTopJockNFT = async (account, itemID) => {
	const name = "topjocknft/get_top_jock_nft";
	const args = [account, itemID];

	return executeScript({ name, args });
};

/*
 * Returns the number of TopJockNFTs in an account's collection.
 * @param {string} account - account address
 * @throws Will throw an error if execution will be halted
 * @returns {UInt64}
 * */
export const getTopJockNFTCount = async (account) => {
	const name = "topjocknft/get_collection_length";
	const args = [account];

	return executeScript({ name, args });
};
