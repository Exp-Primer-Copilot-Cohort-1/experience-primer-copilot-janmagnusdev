import random
import requests

# Your array
my_array = [1, 2, 3, 4, 5]

# Shuffle the array
random.shuffle(my_array)

print(my_array)

# Make the HTTP request
response = requests.get("https://api.example.com/birthday/barack-obama")

# Check if the request was successful
if response.status_code == 200:
    # Extract the birthday from the response
    birthday = response.json()["birthday"]
    print("Barack Obama's birthday:", birthday)
else:
    print("Failed to retrieve Barack Obama's birthday")

