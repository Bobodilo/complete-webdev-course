// SPDX-Licence-Identifier: MIT

pragma solidity ^0.6.0;

contract SimpleStorage {
    uint256 FavoriteNumber;
    bool FavoriteBool;

    struct People {
        uint256 FavoriteNumber;
        string name;
    }

    People[] public people;
    mapping(string => uint256) public NameToFavoriteNumber;

    function Store(uint256 _FavoriteNumber) public {
        FavoriteNumber = _FavoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return FavoriteNumber;
    }

    function AddPerson(string memory _name, uint256 _FavoriteNumber) public {
        people.push(People(_FavoriteNumber, _name));
        NameToFavoriteNumber[_name] = _FavoriteNumber;
    }
}
