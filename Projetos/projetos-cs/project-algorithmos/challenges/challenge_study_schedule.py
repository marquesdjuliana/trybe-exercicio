def study_schedule(permanence_period, target_time):
    student_count = 0

    if target_time is None or not isinstance(target_time, int):
        return None

    for entry_start, entry_end in permanence_period:
        if (
            entry_start is None or not isinstance(entry_start, int) or
            entry_end is None or not isinstance(entry_end, int)
        ):
            return None

        if entry_start <= target_time <= entry_end:
            student_count += 1

    return student_count
