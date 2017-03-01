// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import abi from '~/contracts/abi/tokenreg';

const id = 'tokenreg';
const sourceUrl = 'https://github.com/ethcore/contracts/blob/58842b92c00e3c45a84b6d0ac9b842f016dde50a/TokenReg.sol';
const deployParams = [];
const byteCode = '0x606060405260008054600160a060020a03191633600160a060020a0316179055670de0b6b3a7640000600455341561003357fe5b5b611473806100436000396000f300606060405236156100b45763ffffffff60e060020a600035041663044215c681146100b657806313af4035146101df57806366b42dcb146101fd57806369fe0e2d146102ab5780637958533a146102c05780637b1a547c146102e8578063891de9ed146103a15780638da5cb5b146104bc5780639890220b146104e85780639f181b5e146104fa578063a02b161e1461051c578063b72e717d14610531578063dd93890b1461066a578063ddca3f4314610685575bfe5b34156100be57fe5b6100c96004356106a7565b60408051600160a060020a038088168252918101859052908216608082015260a060208083018281528751928401929092528651606084019160c0850191908901908083838215610135575b80518252602083111561013557601f199092019160209182019101610115565b505050905090810190601f1680156101615780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838382156101a0575b8051825260208311156101a057601f199092019160209182019101610180565b505050905090810190601f1680156101cc5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b34156101e757fe5b6101fb600160a060020a036004351661083a565b005b60408051602060046024803582810135601f8101859004850286018501909652858552610297958335600160a060020a0316959394604494939290920191819084018382808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989a8a359a9099940197509195509182019350915081908401838280828437509496506108ae95505050505050565b604080519115158252519081900360200190f35b34156102b357fe5b6101fb6004356108c8565b005b34156102c857fe5b6102d66004356024356108ed565b60408051918252519081900360200190f35b60408051602060046024803582810135601f8101859004850286018501909652858552610297958335600160a060020a0316959394604494939290920191819084018382808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989a8a359a90999401975091955091820193509150819084018382808284375094965050509235600160a060020a0316925061092c915050565b604080519115158252519081900360200190f35b34156103a957fe5b6103f7600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843750949650610c6695505050505050565b6040518086815260200185600160a060020a0316600160a060020a031681526020018481526020018060200183600160a060020a0316600160a060020a0316815260200182810382528481815181526020019150805190602001908083836000831461047e575b80518252602083111561047e57601f19909201916020918201910161045e565b505050905090810190601f1680156104aa5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34156104c457fe5b6104cc610dca565b60408051600160a060020a039092168252519081900360200190f35b34156104f057fe5b6101fb610dd9565b005b341561050257fe5b6102d6610e2c565b60408051918252519081900360200190f35b341561052457fe5b6101fb600435610e33565b005b341561053957fe5b61054d600160a060020a0360043516611047565b60405180868152602001806020018581526020018060200184600160a060020a0316600160a060020a03168152602001838103835287818151815260200191508051906020019080838360008314610135575b80518252602083111561013557601f199092019160209182019101610115565b505050905090810190601f1680156101615780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838382156101a0575b8051825260208311156101a057601f199092019160209182019101610180565b505050905090810190601f1680156101cc5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b341561067257fe5b6101fb6004356024356044356111f3565b005b341561068d57fe5b6102d66112b0565b60408051918252519081900360200190f35b60006106b16112b6565b60006106bb6112b6565b600060006003878154811015156106ce57fe5b906000526020600020906006020160005b50805460018083018054604080516020601f600260001997861615610100029790970190941695909504928301859004850281018501909152818152600160a060020a039094169a5093945091929083018282801561077f5780601f106107545761010080835404028352916020019161077f565b820191906000526020600020905b81548152906001019060200180831161076257829003601f168201915b505050600280850154600386018054604080516020601f6000196101006001871615020190941696909604928301869004860281018601909152818152969b50919950935091508301828280156108175780601f106107ec57610100808354040283529160200191610817565b820191906000526020600020905b8154815290600101906020018083116107fa57829003601f168201915b50505050600483015491945050600160a060020a031691505b5091939590929450565b60005433600160a060020a03908116911614610855576108aa565b60008054604051600160a060020a03808516939216917f70aea8d848e8a90fb7661b227dc522eb6395c3dac71b63cb59edd5c9899b236491a360008054600160a060020a031916600160a060020a0383161790555b5b50565b60006108bd858585853361092c565b90505b949350505050565b60005433600160a060020a039081169116146108e3576108aa565b60048190555b5b50565b60006003838154811015156108fe57fe5b906000526020600020906006020160005b506000838152600591909101602052604090205490505b92915050565b600060045434101561093d57610c5d565b600160a060020a03861660009081526001602052604090205486901561096257610c5b565b8551869060031461097257610c59565b866002816040518082805190602001908083835b602083106109a55780518252601f199092019160209182019101610986565b51815160209384036101000a60001901801990921691161790529201948552506040519384900301909220541591506109df905057610c56565b60038054600181016109f183826112c8565b916000526020600020906006020160005b506040805160a081018252600160a060020a03808e1680835260208084018f90529383018d9052606083018c9052908a1660808301528354600160a060020a0319161783558b51909291610a5d9160018401918e01906112fa565b506040820151600282015560608201518051610a839160038401916020909101906112fa565b506080919091015160049091018054600160a060020a031916600160a060020a03928316179055600354908b1660009081526001602090815260409182902083905590518b519293506002928c928291908401908083835b60208310610afa5780518252601f199092019160209182019101610adb565b51815160001960209485036101000a81019182169119929092161790915293909101958652604051958690038101862096909655506003548d519101948d9493508392508401908083835b60208310610b645780518252601f199092019160209182019101610b45565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207f25074d730da65a10e171fe5589d2182313ef00da38d23a9ae3b78923568bdf2d8b896040518083600160a060020a0316600160a060020a0316815260200180602001828103825283818151815260200191508051906020019080838360008314610c17575b805182526020831115610c1757601f199092019160209182019101610bf7565b505050905090810190601f168015610c435780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3600193505b5b505b505b505b95945050505050565b600060006000610c746112b6565b6000600060016002886040518082805190602001908083835b60208310610cac5780518252601f199092019160209182019101610c8d565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902054039550600386815481101515610cf257fe5b906000526020600020906006020160005b5080546002808301546003840180546040805160206101006001851615026000190190931695909504601f8101839004830286018301909152808552600160a060020a039095169a50919850939450909291908301828280156108175780601f106107ec57610100808354040283529160200191610817565b820191906000526020600020905b8154815290600101906020018083116107fa57829003601f168201915b50505050600483015491945050600160a060020a031691505b5091939590929450565b600054600160a060020a031681565b60005433600160a060020a03908116911614610df457610e28565b604051600160a060020a0333811691309091163180156108fc02916000818181858888f193505050501515610e2857610000565b5b5b565b6003545b90565b60005433600160a060020a03908116911614610e4e576108aa565b80600382815481101515610e5e57fe5b906000526020600020906006020160005b506001016040518082805460018160011615610100020316600290048015610ece5780601f10610eac576101008083540402835291820191610ece565b820191906000526020600020905b815481529060010190602001808311610eba575b505060405190819003812092507f96e76fa77fea85d8abeb7533fdb8288c214bb1dcf1f867c8f36a95f1f509c1759150600090a360016000600383815481101515610f1557fe5b906000526020600020906006020160005b5054600160a060020a031681526020810191909152604001600090812055600380546002919083908110610f5657fe5b906000526020600020906006020160005b506001016040518082805460018160011615610100020316600290048015610fc65780601f10610fa4576101008083540402835291820191610fc6565b820191906000526020600020905b815481529060010190602001808311610fb2575b50509283525050604051908190036020019020600090556003805482908110610feb57fe5b906000526020600020906006020160005b8154600160a060020a0319168255611018600183016000611379565b60028201600090556003820160006110309190611379565b506004018054600160a060020a03191690555b5b50565b60006110516112b6565b600061105b6112b6565b600160a060020a03851660009081526001602052604081205460038054600019909201965082918790811061108c57fe5b906000526020600020906006020160005b509050806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561077f5780601f106107545761010080835404028352916020019161077f565b820191906000526020600020905b81548152906001019060200180831161076257829003601f168201915b505050600280850154600386018054604080516020601f6000196101006001871615020190941696909604928301869004860281018601909152818152969b50919950935091508301828280156108175780601f106107ec57610100808354040283529160200191610817565b820191906000526020600020905b8154815290600101906020018083116107fa57829003601f168201915b50505050600483015491945050600160a060020a031691505b5091939590929450565b8233600160a060020a031660038281548110151561120d57fe5b906000526020600020906006020160005b5060040154600160a060020a031614611236576112a9565b8160038581548110151561124657fe5b906000526020600020906006020160005b50600085815260059190910160209081526040918290209290925580518481529051859287927f7991c63a749706fd298fc2387764d640be6e714307b6357b1d3c2ce35cba3b52929081900390910190a35b5b50505050565b60045481565b60408051602081019091526000815290565b8154818355818115116112f4576006028160060283600052602060002091820191016112f491906113c1565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061133b57805160ff1916838001178555611368565b82800160010185558215611368579182015b8281111561136857825182559160200191906001019061134d565b5b50611375929150611426565b5090565b50805460018160011615610100020316600290046000825580601f1061139f57506108aa565b601f0160209004906000526020600020908101906108aa9190611426565b5b50565b610e3091905b80821115611375578054600160a060020a031916815560006113ec6001830182611379565b60028201600090556003820160006114049190611379565b50600481018054600160a060020a03191690556006016113c7565b5090565b90565b610e3091905b80821115611375576000815560010161142c565b5090565b905600a165627a7a72305820c4b35afab943f3c3cc6172a62f5510b2a4a8a922c753abf5a0da848f7173f0070029';

export {
  abi,
  byteCode,
  deployParams,
  id,
  sourceUrl
};
