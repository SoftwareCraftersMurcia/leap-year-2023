<?php

declare(strict_types=1);

namespace Kata;

final class LeapYear
{
    public function isLeap(int $year): bool
    {
        if ($year % 4 === 0) {
            return true;
        }

        return false;
    }
}
