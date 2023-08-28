from brownie import accounts, config, SimpleStorage

def deploy_simple_storage();
account = accounts[0]
simple_storage = SimpleStorage.deploy({"from": account})
stored_value =simple_storage.retrieve()
print(stored_value)
transaction = simple_storage/store(15, {"from": account})
transaction.wait(1)
updated_stored_value = simple_storage.retrieve()
print(updated_stored_value)

//print(account)

def main();
         deploy_simple_storage()

//thenrun "brownie run scripts/deploy.py"

def test_deploy();
//to test a contract we need 
    //Arrange 
    account = accounts[0]

    //Act
    simple_storage = SimpleStorage.deploy({"from": account})
    starting_value = simple_storage.retrieve()
    expected = 0

    //Assert
    

//



