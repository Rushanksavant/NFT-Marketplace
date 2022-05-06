Application up and running: https://rushank-nft-marketplace.netlify.app/
Deployed on Ropsten testnet

Do not forget to install metamask and get some test ethers from Ropsten faucet.

Features:
- Buy the NFTs listed on marketplace, and resell them at higher price for profits.
- Create NFT of your ART.
- Pay listing price(0.025 ETH) to list your NFT on Marketplace.
- Earn ROYALTIES (2% from seller's profit) from your NFT reselling. 


Solidity Contract:
- Dependencies used:
  1. @openzeppelin/contracts/utils/Counters.sol
    To track the tokens minted and sold on the marketpalce.
  2. @openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol
    To support off-chain storage of NFT artifacts.
  3. @openzeppelin/contracts/token/ERC721/ERC721.sol
    Standard for representing ownership of non-fungible tokens (introducing uniqueness)
    
- State Varibales:
  - Counters.Counter private _tokenIds;  // unique token Id for every minted token
  - Counters.Counter private _itemsSold; // total items listed on marketplace
  - uint256 listingPrice = 0.025 ether; 
  - address payable owner; // creator of market place who will recieve listingPice whenevr a NFT is sold
  - struct MarketItem {uint256 tokenId; address payable seller; address payable owner; uint256 price; bool sold;} // info of NFT
  - struct MarketItem_for_Royalty {address payable creator; uint256 pre_price; uint256 royalty_earned;} // royalty info of NFT
  - mapping(uint256 => MarketItem) private idToMarketItem; // store info for every tokenId 
  - mapping(uint256 => MarketItem_for_Royalty) private idToMarketItem_for_Royalty;  // store royalty info for every tokenId
  - event MarketItemCreated(uint256 indexed tokenId, address seller, address owner, uint256 price, bool sold); 
  - event MarketItem_for_RoyaltyCreated(address creator, uint256 pre_price, uint256 royalty_earned); 

- Functions:
  - function createToken(string memory tokenURI, uint256 price) public payable returns (uint256) {}
  - function createMarketItem(uint256 tokenId, uint256 price) private {}
  - function createMarketSale(uint256 tokenId) public payable {}
  - function resellToken(uint256 tokenId, uint256 price) public payable {}
  - function fetchMarketItems() public view returns (MarketItem[] memory) {}
  - function fetchMyNFTs() public view returns (MarketItem[] memory) {}
  - function fetchItemsListed() public view returns (MarketItem[] memory) {}
