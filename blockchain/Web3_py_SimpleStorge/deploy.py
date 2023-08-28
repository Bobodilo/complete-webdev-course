from solcx import compile_standard, install_solc
import json
from web3 import Web3
import os
from dotenv import load_dotenv

load_dotenv()

with open("./SimpleStorage.sol", "r") as file:
    simple_storage_file = file.read()


install_solc("0.6.0")

# Compile our solidity

compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {"SimpleStorage.sol": {"content": simple_storage_file}},
        "settings": {
            "outputSelection": {
                "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
            }
        },
    },
    solc_version="0.6.0",
)

with open("compiled_code.json", "w") as file:
    json.dump(compiled_sol, file)

    # get byte code

    bytecode = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["evm"][
        "bytecode"
    ]["object"]

    # get the abi

    abi = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["abi"]

    # to connect to ganache

    w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:7545"))
    chain_id = 1337
    my_address = "0x06A2163136c1565E9D05648488D99E35570c5C84"
    private_key = os.getenv("New_Private_Key")

    # Create the contract in python
    SimpleStorage = w3.eth.contract(abi=abi, bytecode=bytecode)

    # Get the latest tx
    nonce = w3.eth.getTransactionCount(my_address)

    # 1. Build a tx
    # 2. Sign a tx
    # 3. Send a tx
    transaction = SimpleStorage.constructor().buildTransaction(
        {
            "chainId": chain_id,
            "from": my_address,
            "nonce": nonce,
            "gasPrice": w3.eth.gas_price,
        }
    )

    signed_txn = w3.eth.account.sign_transaction(transaction, private_key=private_key)

    # Send this signed txn to the blockchain
    tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

    # Working with Contract, you need:
    # Contrct ABI
    # Contract Address
    simple_storage = w3.eth.contract(address=tx_receipt.contractAddress, abi=abi)
    # Call => simulate making a call and getting a value
    # transact => actually makes a state change on the blockchain

    # should return bound to smth

    print(simple_storage.functions.retrieve().call())
    store_transaction = simple_storage.functions.store(15).buildTransaction(
        {"chain_id": chain_id, "from": my_address, "nonce": nonce + 1}
    )

    signed_store_txn = w3.eth.account.sign_transaction(store_transaction)
