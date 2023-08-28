# We need the letters to covert them into numerical values
# Then we need a KEy

Alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
Key = 3


def ceasarEncrypt(plainText):

    # Text to encrypt
    cipherText = ""

    # Make the algorithm case incensitive
    plainText = plainText.upper()

    # Consider all the text in the plainText
    for c in plainText:

        # find the numerical representation (index) associated with
        # that character in the alphabet
        index = Alphabet.find(c)

        # Ceasar Cipher is just of letters by the key value.
        # we use modulo to stay in the range of the alphabet letters

        index = (index + Key) % len(Alphabet)

        # Keep appending the encrypted character to the cipher_text
        cipherText = cipherText + Alphabet[index]

        return cipherText


def CeasarDecrypt(cipherText):

    plainText = ""

    for c in cipherText:
        index = Alphabet.find(c)
        index = (index - Key) % len(Alphabet)
        plainText = plainText + Alphabet[index]

        return plainText


if __name__ == "__main__":

    m = "hello"

    print(ceasarEncrypt(m))
