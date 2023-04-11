# Password Generator
link:  

## Description
This password generator should allow users to input requirements for criteria that will populate a functional password to use

## Usage
Sometimes thinking of passwords that are so strictly regualted with multiple requirements can be SO difficult! This password generator will take whatever requirements are selected by the user and help generate a password that will meet each of those selections!

    The requirements for this are as follows
    - Character length 8-128
    - Choose whether you want:
        - Special Characters
        - Numbers
        - Upper case letters
        - Lower case letters

## Credit
Foolish Developer: https://dev.to/code_mystery
    - https://dev.to/code_mystery/random-password-generator-using-javascript-6a

## License
MIT License (see repo)

## Acceptance Criteria
### (I need a new, secure password)

- WHEN I click the button to generate a password
    - THEN I am presented with a series of prompts for password criteria

- WHEN prompted for password criteria
    - THEN I select which criteria to include in the password

- WHEN prompted for the length of the password
    - THEN I choose a length of at least 8 characters and no more than 128 characters

- WHEN asked for character types to include in the password
    - THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

- WHEN I answer each prompt
    - THEN my input should be validated and at least one character type should be selected

- WHEN all prompts are answered
    - THEN a password is generated that matches the selected criteria

- WHEN the password is generated
    - THEN the password is either displayed in an alert or written to the page
