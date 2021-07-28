import numpy as np

def geothmetic_meandian(
    numbers: np.array,
    error: float = 10e-5
):
    '''Find the geothmetic meandian of a set of numbers.'''

    # If all the numbers are close to the same, return the first number
    if sum(np.abs(numbers - numbers[0])) < error:
        return numbers[0]
    else:
        # Recursively call the geomethic meandian until the numbers converge
        return geothmetic_meandian(np.array([
            np.average(numbers),
            np.product(np.power(numbers, 1 / len(numbers))),
            np.median(numbers)
        ]), error)