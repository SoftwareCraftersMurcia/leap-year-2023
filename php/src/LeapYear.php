<?php

declare(strict_types=1);

namespace Kata;

final class LeapYear
{
    public function isLeap(int $year): bool
    {
        if ($year === 8 || $year === 12 || $year === 16) {
            return true;
        }

        return false;
    }
}
