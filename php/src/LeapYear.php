<?php

declare(strict_types=1);

namespace Kata;

final class LeapYear
{
    public function isLeap(int $year): bool
    {
        return !(
            $this->isDivisibleBy100ButNotBy400($year)
            || $this->isNotDivisibleBy4($year)
        );
    }

    private function isDivisibleBy100ButNotBy400(int $year): bool
    {
        return $year % 400 !== 0 && $year % 100 === 0;
    }

    private function isNotDivisibleBy4(int $year): bool
    {
        return $year % 4 !== 0;
    }
}
