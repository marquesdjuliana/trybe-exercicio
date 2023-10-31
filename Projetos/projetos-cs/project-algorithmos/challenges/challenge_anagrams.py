def quick_sort_string(input_str):
    if len(input_str) < 2:
        return input_str

    pivot = input_str[len(input_str) // 2]
    low = "".join([char for char in input_str if char < pivot])
    same = "".join([char for char in input_str if char == pivot])
    high = "".join([char for char in input_str if char > pivot])

    return "".join([quick_sort_string(low), same, quick_sort_string(high)])


def is_anagram(first_string, second_string):
    def clean_and_sort(s):
        s = s.lower()
        s = "".join(s.split())
        s = quick_sort_string(s)
        return s

    if (
        not first_string or not second_string
    ):
        return (
            clean_and_sort(first_string),
            clean_and_sort(second_string),
            False,
        )

    cleaned_first = clean_and_sort(first_string)
    cleaned_second = clean_and_sort(second_string)

    return (cleaned_first, cleaned_second, cleaned_first == cleaned_second)
