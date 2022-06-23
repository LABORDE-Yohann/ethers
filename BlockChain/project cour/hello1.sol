pragma solidity ^0.5.7;

contract hello1 {
    uint256 private message;
    constructor(uint256 _message) public {
        message = _message;
    }
    function getMessage() public view returns (uint256) {
        return message;
    }
    function setMessage(uint256 _message) public {
        message = _message;
    }
}