def find_duplicate(nums):
    if (
        not nums
        or (not isinstance(nums, list) and not isinstance(nums, str))
        or not all(isinstance(num, int) and num > 0 for num in nums)
    ):
        return False

    nums.sort()

    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            return nums[i]

    return False
